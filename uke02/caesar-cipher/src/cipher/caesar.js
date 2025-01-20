export const encode = (plain, key) => {
    const letters = [...plain];
    const charCode = letters.map((letter) => letter.charCodeAt(0));
    const shifted = charCode.map((code) => {
        if (code < 97) {
            return code + key > 90 ? code + key - 26 : code + key;
        } else {
            return code + key > 122 ? code + key - 26 : code + key;
        }
    });
    const encoded = shifted.map((code) => String.fromCharCode(code));
    return encoded.join("");
};
