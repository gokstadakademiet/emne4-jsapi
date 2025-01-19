import { inverseBoolean } from "./demo";

describe("test boolean inverser", () => {
    test("inverseBoolean should return false when input is true", () => {
        const input = true;
        expect(inverseBoolean(input)).toBe(false);
    });
});
