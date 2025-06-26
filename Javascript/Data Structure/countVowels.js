const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', function(input) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of input) {
        if (vowels.includes(char)) count++;
    }
    console.log('Number of vowels:', count);
    rl.close();
});
