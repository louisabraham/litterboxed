<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    export let brython_promise;

    let minlength = 3;
    let side = 30;
    let x = 6;
    let y = 6;
    let circles = [];
    let letters_pos = [];
    let letter_offset = 3.5;
    let letter_size = 4;
    let letters = "            ";
    let generate;
    let check;
    onMount(async () => {
        brython_promise.then(() => {
            message = "";
            generate = make_generate();
            letters = generate().join("").toUpperCase();
            message = "loading dict";
            check = make_check();
            message = "";
        });
    });

    let hitboxes = [];
    for (let i = 0; i < 3; i++) {
        let offset = (side / 3) * (i + 0.5);
        circles.push({ x: x, y: y + offset });
        letters_pos.push({ x: x - letter_offset, y: y + offset });
        hitboxes.push({
            x: x - letter_offset - letter_size / 2,
            y: y + offset - letter_size / 2,
            width: letter_size + letter_offset,
            height: letter_size,
        });

        circles.push({ x: x + side, y: y + offset });
        letters_pos.push({ x: x + side + letter_offset, y: y + offset });
        hitboxes.push({
            x: x + side - letter_size / 2,
            y: y + offset - letter_size / 2,
            width: letter_size + letter_offset,
            height: letter_size,
        });

        circles.push({ x: x + offset, y: y });
        letters_pos.push({ x: x + offset, y: y - letter_offset });
        hitboxes.push({
            x: x + offset - letter_size / 2,
            y: y - letter_offset - letter_size / 2,
            width: letter_size,
            height: letter_size + letter_offset,
        });

        circles.push({ x: x + offset, y: y + side });
        letters_pos.push({ x: x + offset, y: y + side + letter_offset });
        hitboxes.push({
            x: x + offset - letter_size / 2,
            y: y + side - letter_size / 2,
            width: letter_size,
            height: letter_size + letter_offset,
        });
    }
    let stroke = 0.3;
    let index = (i) => (i % 4) * 3 + Math.floor(i / 4);
    let revindex = (i) => (i % 3) * 4 + Math.floor(i / 3);
    let currentWord = "";
    $: lastLetter = currentWord ? letters.indexOf(currentWord.slice(-1)) : -1;
    let selectLetter = (i) => {
        if (Math.floor(lastLetter / 3) != Math.floor(i / 3))
            currentWord = currentWord + letters[i];
    };
    let deleteLetter = () => {
        currentWord = currentWord.slice(0, -1);
        if (currentWord == "")
            if (previousWords.length) {
                currentWord = previousWords.pop();
                previousWords = previousWords;
            }
    };

    let previousWords = [];
    let enterWord = () => {
        if (currentWord.length < minlength) return alert("Too short");
        if (!check(currentWord)) return alert("Not a word");
        previousWords = [...previousWords, currentWord];
        currentWord = currentWord.slice(-1);
        lastLetter = lastLetter + 0; // force trigger other events
    };
    let caret = "?";
    setInterval(() => {
        caret = caret ? "" : "?";
    }, 500);
    $: words = previousWords.join(" - ");
    let letterColor = (i) => {
        if (i == lastLetter) return "#ff3e00";
        if (previousWords.join("").indexOf(letters[i]) > -1) return "grey";
        if (currentWord.indexOf(letters[i]) > -1) return "black";
        return "white";
    };
    let message = "loading";
    let alert = (msg) => {
        message = msg;
        setTimeout(() => {
            message = "";
        }, 1000);
    };
</script>

<main>
    <h1>litter boxed</h1>

    <div class="current">
        {#if message}
            <span
                style="position: absolute; left: 0; right: 0; font-size: medium;"
                transition:fade
                class="message">{message}</span
            >
        {/if}
        <span style="display: inline">{currentWord}</span><span
            class="unselectable"
            style={(currentWord ? "width: 0em;" : "") +
                "display: inline-block;"}>{caret}</span
        >
        <hr
            style="min-width: 10em; max-width: 13em;
			border:1px solid black; margin-top: 0"
        />
    </div>
    <div class="words"><p>{words}</p></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
        <rect
            {x}
            {y}
            width={side}
            height={side}
            stroke="black"
            stroke-width={stroke}
            fill="none"
        />
        {#each [...previousWords, currentWord] as word, pos}
            {#each word as l, i}
                {#if i + 1 < word.length}
                    <line
                        x1={circles[revindex(letters.indexOf(l))].x}
                        y1={circles[revindex(letters.indexOf(l))].y}
                        x2={circles[revindex(letters.indexOf(word[i + 1]))].x}
                        y2={circles[revindex(letters.indexOf(word[i + 1]))].y}
                        stroke={pos == previousWords.length
                            ? "#ff3e00"
                            : "#ff3e0080"}
                        stroke-width={stroke}
                        stroke-dasharray={pos == previousWords.length ? 2 : 0}
                    />
                {/if}
            {/each}
        {/each}

        {#each circles as c, i}
            <circle
                cx={c.x}
                cy={c.y}
                r="1"
                fill={(lastLetter, currentWord, letterColor(index(i)))}
                stroke="black"
                stroke-width={stroke}
            />
            <text
                text-anchor="middle"
                dominant-baseline="central"
                x={letters_pos[i].x}
                y={letters_pos[i].y}
                font-size={letter_size}>{letters[index(i)]}</text
            >
            <rect
                x={hitboxes[i].x}
                y={hitboxes[i].y}
                width={hitboxes[i].width}
                height={hitboxes[i].height}
                fill="none"
                stroke="none"
                stroke-width=".1"
                pointer-events="fill"
                on:click={() => selectLetter(index(i))}
            />
        {/each}
    </svg>
    <div class="buttons">
        <button on:click={deleteLetter}>Delete</button>
        <button on:click={enterWord}>Enter</button>
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
        margin-top: 0;
        margin-bottom: 0.4em;
    }
    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .current {
        font-size: x-large;
        position: relative;
    }

    .words {
        height: 1em;
        font-size: large;
    }
    .buttons > button {
        width: 100px;
        text-align: center;
    }

    svg {
        width: 100%;
        max-width: 400px;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .message {
        margin-top: -1.4em;
    }
    @media (max-width: 350px) {
        h1 {
            font-size: 2.5em;
        }
        .message {
            margin-top: -1.2em;
        }
    }
</style>
