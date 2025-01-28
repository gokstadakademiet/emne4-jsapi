import * as usersMock from "../utils/usersMock.js";
import { authenticate, isAuthenticated } from "./authenticate.js";

describe("Authtentication", () => {
    describe("isAuthenticated", () => {
        beforeEach(() => {
            localStorage.clear();
        });
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

        test("should return false if user exists in storage and username is empty", () => {
            const invaldiUser = { anme: "John Doe", username: "" };
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

    describe("authenticate", () => {
        const validUsers = [
            {
                username: "johnMock",
                name: "John Mock",
                password: "password",
            },
            {
                username: "janeMock",
                name: "Jane Mock",
                password: "password",
            },
        ];

        jest.spyOn(usersMock, "getUsers").mockReturnValue(validUsers);

        test("should return false if username is empty", () => {
            expect(authenticate("", "password")).toBe(false);
        });
        test("should return false if password is empty", () => {
            expect(authenticate("username", "")).toBe(false);
        });
        test("should return false if username not found", () => {
            expect(authenticate("invalidUsername", "invalidPassword")).toBe(
                false
            );
        });
        test("should return false if username found but password is incorrect", () => {
            const { username } = validUsers[0];
            expect(authenticate(username, "invalidPassword")).toBe(false);
        });

        test("should return user if username and password are correct", () => {
            const validUser = validUsers[0];
            const { username, password } = validUser;
            expect(authenticate(username, password)).toBe(validUser);
        });
    });
});
