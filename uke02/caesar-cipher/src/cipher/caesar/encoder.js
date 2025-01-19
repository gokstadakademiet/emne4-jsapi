export const encode = (plain, key) => {
    const letters = [...plain];
    const charCode = letters.map((letter) => letter.charCodeAt(0));
    const shifted = charCode.map((code) => code + key);
    const encoded = shifted.map((code) => String.fromCharCode(code));
    return encoded.join("");
};
