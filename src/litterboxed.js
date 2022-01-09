function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        var t = (a + b) | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = (c << 21 | c >>> 11);
        d = d + 1 | 0;
        t = t + d | 0;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    }
}

function xmur3(str) {
    for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    }
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

let rand;
export let seed = (seed) => {
    let gen = xmur3(seed);
    rand = sfc32(gen(), gen(), gen(), gen());
}


function randomChoice(arr) {
    return arr[Math.floor(arr.length * rand())];
}

export let loadWords = async (path) => fetch(path)
    .then(response => response.text()).then(t => t.split('\n'))


let solveCover = (Y) => {
    // Y is a list of list of elements
    let X = new Map();
    for (let y of Y) {
        for (let x of y) {
            if (!X.has(x))
                X.set(x, new Set());
            X.get(x).add(y);
        }
    }
    let solution = new Array();
    let rec = () => {
        if (X.size == 0)
            return solution;
        let c = X.keys().next().value;
        for (const x of X.keys()) {
            if (X.get(x).size < X.get(c).size)
                c = x;
        }
        for (let r of X.get(c)) {
            solution.push(r);
            let cols = select(X, r);
            let ans = rec();
            if (ans) return ans;
            deselect(X, r, cols)
            solution.pop();
        }
        return false;
    }
    return rec();
}

let select = (X, r) => {
    let cols = new Array();
    for (let j of r) {
        for (let i of X.get(j))
            for (let k of i)
                if (k != j)
                    X.get(k).delete(i);
        cols.push(X.get(j)), X.delete(j);
    }
    return cols;
}
let deselect = (X, r, cols) => {
    for (let j of Array.from(r).reverse()) {
        X.set(j, cols.pop());
        for (let i of X.get(j))
            for (let k of i)
                if (k != j)
                    X.get(k).add(i);
    }
}


let unorderedTriples = (set) => {
    let ans = new Array();
    let ar = Array.from(new Set(set));
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            for (let k = j + 1; k < ar.length; k++) {
                ans.push(ar[i] + ar[j] + ar[k]);

            }
        }
    }
    return ans;
}


let pairs = (set) => {
    let ar = Array.from(new Set(set));
    let ans = new Array();
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            ans.push(ar[i] + ar[j]);

        }
    }
    return ans
}
let partition = (w1, w2) => {
    let w = w1 + w2.slice(1);
    let Y = new Array();
    for (let tri of unorderedTriples(w)) {
        if (pairs(tri).some(x => w.indexOf(x) != -1))
            continue;
        Y.push(tri);
    }
    return solveCover(Y);
}
let genPair = (words, wbfl, unique) => {
    while (1) {
        let w1 = randomChoice(words);
        let w2 = randomChoice(wbfl.get(w1.slice(-1)))
        if (new Set(w1 + w2).size == 12 && (!unique || (w1 + w2).length == 13))
            return [w1, w2];
    }
}
export let getDate = () => {
    var today = new Date();
    return (
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate()
    );
};

export let makeGenerate = (words) => {
    seed(getDate());
    let wbfl = new Map();
    for (let w of words) {
        let c = w[0];
        if (!wbfl.has(c))
            wbfl.set(c, new Array());
        wbfl.get(c).push(w);
    }
    return () => {
        while (true) {
            let [w1, w2] = genPair(words, wbfl, true);
            let puzzle = partition(w1, w2);
            if (puzzle)
                return puzzle;
        }
    }

}

export let makeCheck = (words) => (w) => {
    w = w.toLowerCase();
    let a = 0,
        b = words.length;
    while (b - a > 1) {
        let c = Math.floor((a + b) / 2);
        if (w < words[c])
            b = c;
        else
            a = c;
    }
    return w == words[a];
};