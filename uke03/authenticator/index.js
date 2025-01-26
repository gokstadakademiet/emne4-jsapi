import { isAuthenticated } from "./public/auth/auth.js";

export const protectPage = () => {
    console.log("protectPage", window.location.pathname);
    if (isAuthenticated()) {
        window.location.assign("/private/dashboard");
    }
    window.location.assign("/public/auth");
};
