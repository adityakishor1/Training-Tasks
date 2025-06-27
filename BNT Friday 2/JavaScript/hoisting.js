console.log("Using var:");
console.log(x); 
var x = 10;

console.log("Using let:");
try {
  console.log(y); 
} catch (error) {
  console.log("Error:", error.message); 
}
let y = 20;
