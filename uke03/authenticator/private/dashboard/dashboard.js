const usernameDisplay = document.querySelector("span#username");
const logoutButton = document.querySelector("button#logout");
const loggedinUser = JSON.parse(localStorage.getItem("user"));

console.log("loggedinUser", loggedinUser);

if (!loggedinUser) {
    window.location.assign("/public/auth");
}

logoutButton.addEventListener("click", () => {
    console.log("loggedinUser", loggedinUser);
    localStorage.removeItem("user");
    window.location.assign("/");
});

usernameDisplay.textContent = loggedinUser.username;
