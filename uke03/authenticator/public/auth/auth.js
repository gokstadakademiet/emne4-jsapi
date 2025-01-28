import { authenticate } from "../../src/authenticate.js";

const signinForm = document.querySelector('form[name="signin"]');
const singinError = document.querySelector("label[for='signin']");

signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    new FormData(signinForm);
});

signinForm.addEventListener("formdata", (event) => {
    const data = Object.fromEntries(event.formData);
    const user = authenticate({ ...data });

    if (!user) {
        singinError.textContent = "Invalid username or password";
        return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    window.location.assign("/");
});
