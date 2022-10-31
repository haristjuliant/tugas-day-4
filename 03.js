while (true) {
    const prompt = require("prompt-sync")();
    const input = prompt("Input: ");

    console.log(`output: ${input%2 == 0 ? "Genap" : "Ganjil"}`);
}