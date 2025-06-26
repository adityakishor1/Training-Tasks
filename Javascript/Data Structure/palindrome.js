const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', function(input) {
    const reversed = input.split('').reverse().join('');
    const isPalindrome = input === reversed;
    console.log(isPalindrome ? 'Palindrome' : 'Not a palindrome');
    rl.close();
});
