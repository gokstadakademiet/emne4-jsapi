import { decode, encode } from "./src/cipher/caesar.js";
const source = document.getElementById("input");
const output = document.getElementById("output");
const encodeBtn = document.getElementById("encode");
const decodeBtn = document.getElementById("decode");
const shiftKey = document.getElementById("shift-key");

encodeBtn.addEventListener("click", () => {
    output.value = encode(source.value, shiftKey.value);
});

decodeBtn.addEventListener("click", () => {
    output.value = decode(source.value, shiftKey.value);
});
