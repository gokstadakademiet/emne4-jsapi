import { register } from "/src/authenticate.js";
const registerForm = document.querySelector('form[name="register"]');
const registerError = document.querySelector("label[for='register']");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    new FormData(registerForm);
});

registerForm.addEventListener("formdata", (event) => {
    const inputData = Object.fromEntries(event.formData);
    const user = register({ ...inputData });

    if (!user) {
        registerError.textContent = "Invalid username or password";
        return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    window.location.assign("/");
});
