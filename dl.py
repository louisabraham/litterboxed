import requests


def check(w):
    if len(w) < 3:
        return False
    last = None
    for c in w:
        if c == last:
            return False
        last = c
    return True


def scrabble_words():
    return requests.get(
        "https://www.wordgamedictionary.com/twl06/download/twl06.txt"
    ).text.split()[4:]


def google_words():
    return requests.get(
        "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt"
    ).text.split()


def easy_words():
    return sorted(set(scrabble_words()) & set(google_words()))


if __name__ == "__main__":
    for (name, fun) in [
        ("scrabble", scrabble_words),
        ("10000", google_words),
        ("easy", easy_words),
    ]:
        with open(f"public/{name}.txt", "w") as f:
            print(*filter(check, fun()), sep="\n", file=f)
