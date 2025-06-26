const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by space: ', function(input) {
    const arr = input.split(' ').map(Number);
    const unique = [...new Set(arr)];
    console.log('Array after removing duplicates:', unique);
    rl.close();
});
