export const getUsers = () => {
    return users;
};

export const registerUser = (userData) => {
    const { repeatPassword, ...newUser } = userData;
    const user = {
        id: users.length + 1,
        ...newUser,
    };
    users.push(user);
    return user;
};

const users = [
    {
        id: 1,
        username: "johndoe",
        password: "password",
        name: "John Doe",
        email: "johndoe@example.com",
    },
    {
        id: 2,
        username: "janedoe",
        password: "password",
        name: "Jane Doe",
        email: "janedoe@example.com",
    },
    {
        id: 3,
        username: "alicebaker",
        password: "password",
        name: "Alice Baker",
        email: "alicebaker@example.com",
    },
    {
        id: 4,
        username: "bobcarlson",
        password: "password",
        name: "Bob Carlson",
        email: "bobcarlson@example.com",
    },
];
