const readlineSync = require("readline-sync");


let userFirstName = readlineSync.question("What's your first name?");

let userName = readlineSync.question("What is your name?");

let city = readlineSync.question("Where do you live?");


console.log("Your name is " + userFirstName +" "+ userName + " and you live in " + city);