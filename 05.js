while (true) {
    const prompt = require("prompt-sync")();
    const input = prompt("Input: ");
    let output;

    if (input >= 21) output = "DEWASA";
    else if (input >= 13) output = "REMAJA";
    else if (input >= 9) output = "BIMBINGAN ORANG TUA";
    else output = "SEMUA USIA";

    console.log(`output: ${output}`);
}