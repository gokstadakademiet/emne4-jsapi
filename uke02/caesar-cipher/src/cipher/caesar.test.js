import { encode } from "./caesar";
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

    test("should encode a sentence with spaces and non alphanumeric characters", () => {
        const input = "Hello, World!";
        const key = 1;
        const expected = "Ifmmp, Xpsme!";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });

    test("should encode a sentence with a negative key", () => {
        const input = "Hello, World!";
        const key = -1;
        const expected = "Gdkkn, Vnqkc!";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });

    test("should encode a sentence with a large key", () => {
        const input = "Hello, World!";
        const key = 260;
        const expected = "Hello, World!";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });

    test("should encode a sentence with a large negative key", () => {
        const input = "Hello, World!";
        const key = -260;
        const expected = "Hello, World!";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });

    test("should encode a sentence without any letters", () => {
        const input = "1234567890 -.,!?";
        const key = 1;
        const expected = "1234567890 -.,!?";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });
});
