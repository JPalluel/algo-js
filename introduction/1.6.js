const readlineSync = require("readline-sync");

let firstNumber = new Number(readlineSync.question("Choose a number "));

let secondNumber = new Number(readlineSync.question("Choose another number "));

let result = firstNumber%secondNumber;

console.log(result);