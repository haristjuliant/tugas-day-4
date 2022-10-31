while (true) {
    const prompt = require("prompt-sync")();
    const input = prompt("Input: ");
    let output;

    if (input >= 90) output = "A";
    else if (input >= 80) output = "B";
    else if (input >= 70) output = "C";
    else if (input >= 60) output = "D";
    else output = "E";

    console.log(`output: ${output}`);
}