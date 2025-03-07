const url = "https://pokeapi.co/api/v3/pokemon";

fetch(url) //kommunisere med server
    .then((r) =>
        r.status === 200
            ? r.json()
            : Promise.reject("Her er det feil med listing av pokemon.")
    ) // få en respons
    .then((something) => {
        // få data
        fetch(something.results[0].url)
            .then((r) =>
                r.status === 200
                    ? r.json()
                    : Promise.reject(
                          "Her er det med henting av detaljer av pokemon."
                      )
            )
            .then((data) => console.log(data))
            .catch((error) => console.error("[ERROR]", error));
    })
    // andre tid krevende jobber
    .catch((error) => console.error("[ERROR]", error));

const liste = [];
