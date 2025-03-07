const url = new URLSearchParams(window.location.search).get("url");
const pokemonName = new URLSearchParams(window.location.search).get("name");

console.log("name", pokemonName, "url", url);

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
