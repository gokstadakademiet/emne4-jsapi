import { add } from "./example.js";
describe("Example Test", () => {
    describe("Example Subtest category", () => {
        test("should be true", () => {
            // Arrange
            // * her skal man sette opp componentene for testen
            const number1 = 1;
            const number2 = 2;
            const expectedResult = 3;
            // Act
            // * her skal man calle på funksjonen som skal testes
            const result = add(number1, number2);
            // Assert
            // * her skal man validere at funksjonen oppfører seg som forventet
            expect(result).toBe(expectedResult);
        });
    });
});
