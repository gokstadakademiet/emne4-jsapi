import { encode } from "./src/cipher/caesar.js";
const source = document.getElementById("input");
const output = document.getElementById("output");
const encodeBtn = document.getElementById("encode");
const decodeBtn = document.getElementById("decode");
const shiftKye = document.getElementById("shift-key");

encodeBtn.addEventListener("click", () => {
    console.log("input", source.value);
    output.value = encode(source.value, shiftKye.value);
});
