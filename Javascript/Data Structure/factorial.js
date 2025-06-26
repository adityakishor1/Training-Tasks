const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', function(input) {
    const n = parseInt(input);
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    console.log(`Factorial of ${n}:`, fact);
    rl.close();
});
