const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function uniqueElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const unique = [
    ...arr1.filter(x => !set2.has(x)),
    ...arr2.filter(x => !set1.has(x))
  ];

  return unique;
}

function cleanInput(input) {
  return input
    .split(/[\s,]+/)  
    .map(el => el.trim())
    .filter(el => el.length > 0);  
}

rl.question("Enter first array (space or comma separated): ", function(input1) {
  rl.question("Enter second array (space or comma separated): ", function(input2) {
    const arr1 = cleanInput(input1);
    const arr2 = cleanInput(input2);

    const result = uniqueElements(arr1, arr2);
    console.log("Unique elements:", result);
    rl.close();
  });
});
