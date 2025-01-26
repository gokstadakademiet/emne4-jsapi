export const isAuthenticated = () => {
    if (!localStorage.getItem("user")) {
        return false;
    }
    return true;
};
