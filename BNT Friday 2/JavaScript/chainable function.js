const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function chain(value) {
  return {
    add(n) {
      value += n;
      return this;
    },
    subtract(n) {
      value -= n;
      return this;
    },
    result() {
      return value;
    }
  };
}

rl.question("Enter the initial value: ", function(initial) {
  rl.question("Enter value to add: ", function(addVal) {
    rl.question("Enter value to subtract: ", function(subVal) {
      const start = parseFloat(initial);
      const added = parseFloat(addVal);
      const subtracted = parseFloat(subVal);

      const result = chain(start).add(added).subtract(subtracted).result();
      console.log("Final result:", result);
      rl.close();
    });
  });
});
