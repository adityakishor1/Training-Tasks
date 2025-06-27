const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostRepeatedChar(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let maxChar = '';
  let maxCount = 0;

  for (let char in freq) {
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxChar = char;
    }
  }

  return maxChar;
}

rl.question("Enter a string: ", function(input) {
  const result = mostRepeatedChar(input);
  console.log("Most repeated character:", result);
  rl.close();
});
