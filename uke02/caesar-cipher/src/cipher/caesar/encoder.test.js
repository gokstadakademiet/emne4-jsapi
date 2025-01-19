import { encode } from "./encoder";
describe("Caesar cipher encoder", () => {
    test("should shift a letter by number of key", () => {
        const input = "A";
        const key = 1;
        const expected = "B";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });

    test("should shift a letter by number of key when overflowing the alphabet", () => {
        const input = "Z";
        const key = 4;
        const expected = "D";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });

    test("should encode a word with lower case letters", () => {
        const input = "Hello";
        const key = 3;
        const expected = "Khoor";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });
});
