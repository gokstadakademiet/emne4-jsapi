import { createCharacter } from "./app";

describe("Charchter", () => {
    describe("Create character", () => {
        test("Should not return new character with only inputname", () => {
            // arrange
            const inputName = "Hero Nakamura";
            const expected = undefined;

            // act
            const result = createCharacter(inputName);

            // assert
            expect(result).toEqual(expected);
        });

        test("Should create new character with hp", () => {
            // arrange
            const inputName = "Hero Nakamura";
            const inputHp = 80;
            const expected = { name: inputName, hp: inputHp };

            // act
            const result = createCharacter(inputName, inputHp);

            // assert
            expect(result).toEqual(expected);
        });
        test("Should create new character with hp as string", () => {
            // arrange
            const inputName = "Hero Nakamura";
            const inputHp = 80;
            const expected = { name: inputName, hp: inputHp };

            // act
            const result = createCharacter(inputName, inputHp);

            // assert
            expect(result).toEqual(expected);
        });

        test("should not create character with hp as string", () => {
            // arrange
            const inputName = "Hero Nakamura";
            const inputHp = "abebe";
            const expected = undefined;

            // act
            const result = createCharacter(inputName, inputHp);

            // assert
            expect(result).toEqual(expected);
        });
    });
});
