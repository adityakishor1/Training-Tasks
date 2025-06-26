const readline = require('readline');

// Create interface to take input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask user for input
rl.question('Enter a string to reverse: ', function(input) {
    const reversed = input.split('').reverse().join('');
    console.log('Reversed string:', reversed);
    rl.close();
});
