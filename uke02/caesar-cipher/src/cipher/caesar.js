export const decode = (cipher, key) => {
    return encode(cipher, -key);
};

export const encode = (plain, key) => {
    const characters = [...plain];
    const shiftedCharacters = characters.map((char) => {
        if (isAlphabet(char)) {
            return shiftLetter(char, key % 26);
        }
        if ("æøåÆØÅÇÙÆçùæ".includes(char)) {
            return shiftNorwegianLetter(char, key);
        }
        return char;
    });
    return shiftedCharacters.join("");
};

const shiftLetter = (letter, key) => {
    const isLowerCase = letter === letter.toLowerCase();

    const code = isLowerCase
        ? letter.toUpperCase().charCodeAt(0)
        : letter.charCodeAt(0);

    let shiftedLetterCode = 0;

    if (code + key > 90) {
        shiftedLetterCode = code + key - 26;
    } else if (code + key < 65) {
        shiftedLetterCode = code + key + 26;
    } else {
        shiftedLetterCode = code + key;
    }
    const shiftedLetter = String.fromCharCode(shiftedLetterCode);
    return isLowerCase ? shiftedLetter.toLowerCase() : shiftedLetter;
};

const shiftNorwegianLetter = (letter, key) => {
    const isLowerCase = letter === letter.toLowerCase();
    const code = isLowerCase
        ? letter.toUpperCase().charCodeAt(0)
        : letter.charCodeAt(0);
    const shiftedLetter = String.fromCharCode(code + (key > 0 ? 1 : -1));
    return isLowerCase ? shiftedLetter.toLowerCase() : shiftedLetter;
};

const isAlphabet = (char) => /[a-zA-Z]/.test(char) === true;
