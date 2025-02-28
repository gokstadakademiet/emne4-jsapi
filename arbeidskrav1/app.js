const char_name_input = document.querySelector("#character-name");
const char_hp_input = document.querySelector("#character-hp");
const char_attack_input = document.querySelector("#attack-damage");
const char_create_btn = document.querySelector("#create-character");

//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

//  Del 1: Lag karakter og lagre karakteren i localStorage

// char_create_btn.addEventListener("click", () => {
//     const name = char_name_input.value;
//     const hp = char_hp_input.value;

//     const character = createCharacter(name, hp);

//     if (character) {
//         saveCharacter(character);
//     }
// });

export const saveCharacter = (character) => {
    localStorage.setItem("character", JSON.stringify(character));
    calculateDamage(character);
    makeEnemy();
};

export function createCharacter(nameInput, hpInput) {
    if (isNaN(hpInput)) {
        return;
    }

    if (typeof hpInput === "string") {
        hpInput = parseInt(hpInput);
    }

    return { name: nameInput, hp: hpInput };
}

//Seksjon 2: Generer fiende
//Her skal du generere en tilfeldig fiende.
//Fienden skal ha et tilfeldig navn (Goblin, Ork, eller Drage), tilfeldig HP mellom 50 og 150, tilfeldig attack-damage mellom 10 og 140 og et tilfeldig bilde.
//Se assets-mappen for flere bilder.
//Den tilfeldige genererte fienden skal lagres i localStorage.

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage denne strukturen her i Javascript og legge de til i div'en "battle-arena" fra HTML.
