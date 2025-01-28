import { isAuthenticated } from "../../src/authenticate.js";

const usernameDisplay = document.querySelector("span#username");
const logoutButton = document.querySelector("button#logout");

if (!isAuthenticated()) {
    window.location.assign("/public/auth");
}

logoutButton.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.assign("/");
});

usernameDisplay.textContent = isAuthenticated().username;
