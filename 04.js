while (true) {
    const prompt = require("prompt-sync")();
    const input = prompt("Input: ");

    console.log(`output: ${input%4 == 0 ? "Kabisat" : "Bukan Kabisat"}`);
}