export const isAuthenticated = () => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);

    if (!user || user === "") {
        return false;
    }

    if (!user.username || user.username === "") {
        return false;
    }

    return true;
};
