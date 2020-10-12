const readlineSync = require("readline-sync");

let yourShoeSize = new Number(readlineSync.question("what is your Shoe size?"));

let yourBirthYear = new Number(readlineSync.question("What is your Birthyear? "));

let y = yourShoeSize*2;

let x = y + 5;

let z = x + 50;

let a = z * yourBirthYear;

let b = a + 1766;

console.log(b);