const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by space: ', function(input) {
    const arr = input.split(' ').map(Number);
    const sum = arr.reduce((acc, val) => acc + val, 0);
    console.log('Sum of array elements:', sum);
    rl.close();
});
