export const encode = (plain, key) => {
    const characters = [...plain];
    const shiftedCharacters = characters.map((char) => {
        if (!isAlphabet(char)) {
            return char;
        }
        return shiftLetter(char, key % 26);
    });
    return shiftedCharacters.join("");
};

const shiftLetter = (letter, key) => {
    const isLowerCase = letter === letter.toLowerCase();
    const code = isLowerCase
        ? letter.toUpperCase().charCodeAt(0)
        : letter.charCodeAt(0);
    const shiftedLetter = String.fromCharCode(
        code + key > 90 ? code + key - 26 : code + key
    );
    return isLowerCase ? shiftedLetter.toLowerCase() : shiftedLetter;
};

const isAlphabet = (char) => /[a-zA-Z]/.test(char) === true;
