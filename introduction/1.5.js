const readlineSync = require("readline-sync");

let firstNumber = new Number(readlineSync.question("Choose a number with decimal "));

let secondNumber = new Number(readlineSync.question("Choose another one with decimal "));

let result = Math.round(firstNumber)*secondNumber;

console.log(result);