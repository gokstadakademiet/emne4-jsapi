const list = document.querySelector("#pokemonList");
url = "https://pokeapi.co/api/v2/pokemon";

const pokemons = [];

fetch(url)
    .then((r) =>
        r.status === 200
            ? r.json()
            : Promise.reject("Her er det feil med listing av pokemon.")
    )
    .then(({ results }) => {
        results.forEach((pokemon) => {
            pokemons.push(pokemon);
        });

        results.forEach((pokemon) => {
            const node = document.createElement("li");
            node.addEventListener("click", function () {
                console.log(pokemon.name, pokemon.url);
                document.location.href = `pokemon.html?name=${pokemon.name}&url=${pokemon.url}`;
            });
            const text = document.createTextNode(pokemon.name);
            node.appendChild(text);
            list.appendChild(node);
        });

        console.log(pokemons);
    });
