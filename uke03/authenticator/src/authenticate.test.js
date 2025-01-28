import * as usersMock from "../utils/usersMock.js";
import { authenticate, isAuthenticated, register } from "./authenticate.js";

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
            expect(authenticate({})).toBe(false);
        });
        test("should return false if password is empty", () => {
            expect(authenticate({})).toBe(false);
        });
        test("should return false if username not found", () => {
            expect(
                authenticate({
                    username: "invalid",
                    password: "password",
                })
            ).toBe(false);
        });
        test("should return false if username found but password is incorrect", () => {
            const validUser = validUsers[0];
            expect(authenticate({ ...validUser, password: "invalid" })).toBe(
                false
            );
        });

        test("should return user if username and password are correct", () => {
            const validUser = validUsers[0];
            expect(authenticate(validUser)).toBe(validUser);
        });
    });

    describe("register", () => {
        const newUser = {
            username: "newUser",
            password: "password",
            repeatPassword: "password",
            name: "New User",
            email: "new.user@example.com",
        };

        test("should return false if username is empty", () => {
            expect(register({ ...newUser, username: "" })).toStrictEqual(false);
        });

        test("should return false if password is empty", () => {
            expect(register({ ...newUser, password: "" })).toStrictEqual(false);
        });

        test("should return false if name is empty", () => {
            expect(register({ ...newUser, name: "" })).toBe(false);
        });

        test("should return false if email is empty", () => {
            expect(register({ ...newUser, email: "" })).toBe(false);
        });

        test("should return false if username already exists", () => {
            const existingUser = { username: "johnMock" };

            jest.spyOn(usersMock, "getUsers").mockReturnValue([existingUser]);

            expect(
                register({ ...newUser, username: existingUser.username })
            ).toBe(false);
        });
        test("should return false if password and repeat password do not match", () => {
            const existingUser = {
                username: "johnMock",
            };

            jest.spyOn(usersMock, "getUsers").mockReturnValue([existingUser]);

            expect(
                register({
                    ...newUser,
                    username: existingUser.username,
                    password: "password",
                    repeatPassword: "invalid",
                })
            ).toBe(false);
        });

        test("should return user if registration is successful", () => {
            const mock = jest.spyOn(usersMock, "registerUser");
            register({ ...newUser });
            expect(mock).toHaveBeenCalledWith(newUser);
        });
    });
});
