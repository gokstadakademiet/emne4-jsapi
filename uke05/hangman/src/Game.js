export class Game {
    constructor(word) {
        this.word = word.split("");
        this.answer = word.split("").map(() => "_");
        this.wrongGuesses = [];
        this.status = "playing";
        this.remainingGuesses = 6;
        this.word;
    }

    getStatus() {
        if (this.remainingGuesses === 0) {
            this.status = "lost";
        } else if (this.answer.includes("_")) {
            this.status = "playing";
        } else {
            this.status = "won";
        }
    }

    guess(letter) {
        if (this.status !== "playing") {
            return;
        }

        letter = letter.toLowerCase();

        if (this.wrongGuesses.includes(letter)) {
            return;
        }

        if (this.word.includes(letter)) {
            this.word.forEach((element, index) => {
                if (element === letter) {
                    this.answer[index] = letter;
                }
            });
        } else {
            this.wrongGuesses.push(letter);
            this.remainingGuesses--;
        }

        this.getStatus();
    }
}
