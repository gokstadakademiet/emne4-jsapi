import { isAuthenticated } from "./src/authenticate.js";

const nav = document.querySelector("nav");

if (isAuthenticated()) {
    nav.innerHTML = `
<ul>
<li class="list-item">
    <a href="/private/dashboard">Dashboard</a>
</li>
<li class="list-item">
    <a href="/private/settings/">Settings</a>
</li>
</ul>
`;
} else {
    nav.innerHTML = "<a href='/public/auth'>Login</a>";
}
