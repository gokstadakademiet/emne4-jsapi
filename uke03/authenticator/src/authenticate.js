import { getUsers, registerUser } from "../utils/usersMock.js";
export const isAuthenticated = () => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);

    if (!user || user === "") {
        return false;
    }

    if (!user.username || user.username === "") {
        return false;
    }

    return user;
};

export const authenticate = (user) => {
    const { username, password } = user;
    // Check if username or password is empty
    if (username === "" || password === "") {
        return false;
    }

    // fetch list of existing users
    const users = getUsers();

    // Find user with same username in the list of users
    const authenticatedUser = users.find((user) => user.username === username);

    // Check if any user was found
    if (!authenticatedUser) {
        return false;
    }
    // Check if password is correct

    if (authenticatedUser.password !== password) {
        return false;
    }

    return user;
};

export const register = (newUser) => {
    const { username, password, repeatPassword, name, email } = newUser;
    // Check if username or password is empty
    if (username === "" || password === "" || repeatPassword === "") {
        return false;
    }

    // Check if password and repeat password match
    if (password !== repeatPassword) {
        return false;
    }

    if (email === "" || name === "") {
        return false;
    }

    // fetch list of existing users
    const existingUsers = getUsers();

    // Check if username is already taken
    const existingUser = existingUsers.find(
        (user) => user.username === username
    );

    // Check if any user was found return error
    if (existingUser) {
        return false;
    }

    // Add new user to the list
    return registerUser(newUser);
};
