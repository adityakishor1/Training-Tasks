const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number of terms: ', function(input) {
    const n = parseInt(input);
    const result = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        result.push(a);
        [a, b] = [b, a + b];
    }
    console.log('Fibonacci sequence:', result);
    rl.close();
});
