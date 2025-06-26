const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by space: ', function(input) {
    const arr = input.split(' ').map(Number);
    const max = Math.max(...arr);
    console.log('Largest number:', max);
    rl.close();
});
