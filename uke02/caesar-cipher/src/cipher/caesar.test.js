import { decode, encode } from "./caesar";
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

    test("should encode UTF-8 characters", () => {
        const input = "ÆØÅæøå";
        const key = 1;
        const expected = "ÇÙÆçùæ";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });

    test("should encode UTF-8 characters with a large key", () => {
        const input = "ÆØÅæøå";
        const key = 16;
        const expected = "ÇÙÆçùæ";
        const result = encode(input, key);
        expect(result).toBe(expected);
    });
});

describe("Caesar cipher decoder", () => {
    test("should decode a letter by number of key", () => {
        const input = "B";
        const key = 1;
        const expected = "A";
        const result = decode(input, key);
        expect(result).toBe(expected);
    });

    test("should decode a letter by number of key when overflowing the alphabet", () => {
        const input = "D";
        const key = 4;
        const expected = "Z";
        const result = decode(input, key);
        expect(result).toBe(expected);
    });

    test("should decode a word with lower case letters", () => {
        const input = "Khoor";
        const key = 3;
        const expected = "Hello";
        const result = decode(input, key);
        expect(result).toBe(expected);
    });

    test("should decode a sentence with spaces and non alphanumeric characters", () => {
        const input = "Ifmmp, Xpsme!";
        const key = 1;
        const expected = "Hello, World!";
        const result = decode(input, key);
        expect(result).toBe(expected);
    });
});
