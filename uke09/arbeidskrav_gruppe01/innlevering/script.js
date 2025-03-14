import { getHarryPotterList } from "./clients/harrypotterClient";
import { getPokemonList, updatePokemonName } from "./clients/pokemonClient";

let pokemon_list;
getPokemonList().then((data) => {
    pokemon_list = data;
});

getHarryPotterList().then((data) => {
    console.log(data);
});

addPokemontToDb(pokemon_list[0]); // Create
updatePokemonName(pokemon_list[1]); // update
deletePokemon(pokemon_list[0]); // Delete
getPokemonList(); // Read
getPokeminById(pokemon_list[1]._uuid); // Read
