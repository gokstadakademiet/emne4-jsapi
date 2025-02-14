import { Game } from "./Game.js";

describe("Hangman", () => {
    describe("Game", () => {
        let game;

        beforeEach(() => {
            game = new Game("cat");
        });

        describe("guess", () => {
            test("should add to wrongGuesses if a letter is not in the word", () => {
                game.guess("d");
                expect(game.wrongGuesses).toEqual(["d"]);
                expect(game.answer).toEqual(["_", "_", "_"]);
            });

            test("should add to answer if a letter is in the word", () => {
                game.guess("c");
                expect(game.answer).toEqual(["c", "_", "_"]);
            });

            test("should decrement remainingGuesses if a letter is not in the word", () => {
                game.guess("d");
                expect(game.remainingGuesses).toBe(5);
            });
        });

        describe("status", () => {
            test("should return 'playing' if game is not won or lost", () => {
                game.guess("c");
                game.guess("a");
                game.guess("f");
                game.guess("p");
                game.guess("k");
                game.guess("w");
                expect(game.status).toBe("playing");
            });

            test("should return 'won' if all letters have been guessed", () => {
                game.guess("c");
                game.guess("a");
                game.guess("t");
                expect(game.status).toBe("won");
            });

            test("should return 'lost' if remainingGuesses is 0", () => {
                game.guess("d");
                game.guess("e");
                game.guess("f");
                game.guess("g");
                game.guess("h");
                game.guess("i");
                expect(game.status).toBe("lost");
            });
        });
    });
});
