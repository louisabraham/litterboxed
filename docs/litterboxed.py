#%%

from collections import defaultdict
from itertools import combinations, permutations, product
import random
from bisect import bisect_left
from datetime import date


def make_check():
    words = load_words("scrabble.txt", False)

    def check(x):
        x = x.lower()
        i = bisect_left(words, x)
        if i != len(words) and words[i] == x:
            return True
        return False

    return check


def partial(func, /, *args, **keywords):
    def newfunc(*fargs, **fkeywords):
        newkeywords = {**keywords, **fkeywords}
        return func(*args, *fargs, **newkeywords)

    newfunc.func = func
    newfunc.args = args
    newfunc.keywords = keywords
    return newfunc


def _check(w):
    if len(w) < 3:
        return False
    last = None
    for c in w:
        if c == last:
            return False
        last = c
    return True


def load_words(name, check=True):
    with open(name) as f:
        wordlist = f.read().split()
    if not check:
        return wordlist
    return list(filter(_check, wordlist))


def make_triples(words):
    ans = defaultdict(list)
    for w in words:
        if len(w) == 3 == len(set(w)):
            ans["".join(sorted(w))].append(w)
    return ans


# %%


def solve_cover(X, solution=None):
    if solution is None:
        solution = []
    if not X:
        yield list(solution)
    else:
        c = min(X, key=lambda c: len(X[c]))
        for r in list(X[c]):
            solution.append(r)
            cols = select(X, r)
            for s in solve_cover(X, solution):
                yield tuple(s)
            deselect(X, r, cols)
            solution.pop()


def select(X, r):
    cols = []
    for j in r:
        for i in X[j]:
            for k in i:
                if k != j:
                    X[k].remove(i)
        cols.append(X.pop(j))
    return cols


def deselect(X, r, cols):
    for j in reversed(r):
        X[j] = cols.pop()
        for i in X[j]:
            for k in i:
                if k != j:
                    X[k].add(i)


def gen_pair(words, wbfl, unique):
    while True:
        w1 = random.choice(words)
        w2 = random.choice(wbfl[w1[-1]])
        if len(set(w1 + w2)) == 12 and (not unique or len(w1 + w2) == 13):
            return w1, w2


def partition(w1, w2, triples=None):
    w = w1 + w2[1:]
    Y = []
    for tri in combinations(sorted(set(w)), 3):
        if any("".join(x) in w for x in permutations(tri, 2)):
            continue
        tri = "".join(tri)
        if triples is not None:
            if tri not in triples:
                continue
            tri = random.choice(triples[tri])
        Y.append(tri)
    X = defaultdict(set)
    for y in Y:
        for x in y:
            X[x].add(y)
    return next(solve_cover(X), None)


def _generate(words, wbfl, unique, triples=None):
    c = 0
    while True:
        c += 1
        w1, w2 = gen_pair(words, wbfl, unique)
        sol = partition(w1, w2, triples)
        if sol is not None:
            return sol


def make_generate(words="easy.txt", unique=True):
    random.seed(str(date.today()))

    if isinstance(words, str):
        words = load_words(words)
    # triples = make_triples(words)
    wbfl = defaultdict(list)  # words by first letter
    for w in words:
        wbfl[w[0]].append(w)
    return partial(_generate, words, wbfl, unique)


# %%


def make_word_filter(puzzle):
    letter_to_id = {}
    for i, t in enumerate(puzzle):
        for c in t:
            letter_to_id[c] = i

    def word_filter(w):
        last = None
        for c in w:
            i = letter_to_id.get(c, None)
            if i is None or i == last:
                return False
            last = i
        return True

    return word_filter


def _solve(words, puzzle, unique=False):
    ltp = defaultdict(lambda: ([], []))
    for w in filter(make_word_filter(puzzle), words):
        ltp[w[0]][1].append(w)
        ltp[w[-1]][0].append(w)
    for l1, l2 in ltp.values():
        for w1, w2 in product(l1, l2):
            if len(set(w1 + w2)) == 12 and (not unique or len(w1 + w2) == 13):
                yield w1, w2


def make_solve():
    return partial(_solve, load_words("easy.txt"))


# %%
# def good_puzzle(bound):
#     while True:
#         puzzle = generate()
#         it = solve(puzzle)
#         c = 0
#         for sol in it:
#             c += 1
#             if c > bound:
#                 break
#         else:
#             return puzzle


# while True:
#     puzzle = good_puzzle(5)
#     print(*puzzle)
#     print(*next(solve(puzzle)))
#     print("-" * 10)
