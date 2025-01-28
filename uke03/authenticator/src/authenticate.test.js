import { isAuthenticated } from "./authenticate.js";

describe("Authtentication", () => {
    test("should return false if user does not exist in storage", () => {
        localStorage.removeItem("user");
        expect(isAuthenticated()).toBe(false);
    });
    test("should return false if user exists and username is not assigned", () => {
        const invaldiUser = { name: "John Doe" };
        const invaldiUserString = JSON.stringify(invaldiUser);
        localStorage.setItem("user", invaldiUserString);
        expect(isAuthenticated()).toBe(false);
    });
    test("should return true if user exists in storage and username is assigned", () => {
        const validUser = { username: "johndoe" };
        const validUserString = JSON.stringify(validUser);
        localStorage.setItem("user", validUserString);
        expect(isAuthenticated()).toBe(true);
    });
});
