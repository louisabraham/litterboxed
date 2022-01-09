import requests

from joblib import Memory


memory = Memory("~/.cache")


@memory.cache
def scrabble_words():
    return requests.get(
        "https://www.wordgamedictionary.com/twl06/download/twl06.txt"
    ).text.split()[4:]


@memory.cache
def google_words():
    return requests.get(
        "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt"
    ).text.split()


def easy_words():
    return sorted(set(scrabble_words()) & set(google_words()))


if __name__ == "__main__":
    with open("scrabble.txt", "w") as f:
        print(*scrabble_words(), sep="\n", file=f)
    with open("10000.txt", "w") as f:
        print(*google_words(), sep="\n", file=f)
    with open("easy.txt", "w") as f:
        print(*easy_words(), sep="\n", file=f)