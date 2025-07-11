
let a = 10;
let b = 20;

// Swapping two numbers without using a third variable
// a = a + b; // a = 30
// b = a - b; // b = 10
// a = a - b; // a = 20
// console.log("a:", a); // a: 20
// console.log("b:", b); // b: 10


// Swapping two numbers using destructuring assignment
[a, b] = [b, a];
console.log(a,b);
