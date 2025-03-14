const baseURL = "https://crudapi.co.uk/api/v1/pokemon";
const apiKey = "G3wK4cmkEHsydmZFhkdAmcP21Eey5ZAkHcCI7Ft9UpyksZIXqA";

export const getPokemonList = async () => {
    try {
        const response = await fetch(baseURL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
};

export const updatePokemonName = (pokemon) => {
    fetch(url, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            _uuid: pokemon._uuid,
            EatenToday: pokemon.EatenToday,
        }),
    })
        .then((response) =>
            response.ok ? response.json() : Promise.reject(response)
        )
        .then((data) => console.log(data)) // eller gjør hva du vil med dataen som returneres)
        .catch((error) => console.error("Error: ", error));
};
