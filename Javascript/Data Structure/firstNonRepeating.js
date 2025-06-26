const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', function(input) {
    for (let char of input) {
        if (input.indexOf(char) === input.lastIndexOf(char)) {
            console.log('First non-repeating character:', char);
            rl.close();
            return;
        }
    }
    console.log('No non-repeating character found.');
    rl.close();
});
