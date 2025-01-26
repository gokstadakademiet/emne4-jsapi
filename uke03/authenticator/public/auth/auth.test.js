import { isAuthenticated } from "./auth.js";

describe("Authtentication", () => {
    test("should return false if user does not exist in storage", () => {
        localStorage.removeItem("user");
        expect(isAuthenticated()).toBe(false);
    });

    test("should return true if user exists in storage", () => {
        localStorage.setItem("user", { name: "John Doe" });
        expect(isAuthenticated()).toBe(true);
    });
});
