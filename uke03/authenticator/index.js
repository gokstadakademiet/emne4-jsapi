const nav = document.querySelector("nav");
const loggedinUser = JSON.parse(localStorage.getItem("user"));

console.log("loggedinUser", loggedinUser, !loggedinUser);

if (!!loggedinUser) {
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
