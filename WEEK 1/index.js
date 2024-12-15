const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
    const numbers = input.split(" ").map(Number);

    if (numbers.some(isNaN)) {
        console.log("Please enter valid numbers.");
    } else {
        const sum = numbers.reduce((a, b) => a + b, 0);
        const difference = numbers.reduce((a, b) => a - b);
        const product = numbers.reduce((a, b) => a * b, 1);
        const quotient = numbers.reduce((a, b) => a / b);

        console.log(`Sum: ${sum}`);
        console.log(`Difference: ${difference}`);
        console.log(`Product: ${product}`);
        console.log(`Quotient: ${quotient}`);
    }

    rl.close();
});
