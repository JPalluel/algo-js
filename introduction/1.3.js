const readlineSync = require("readline-sync");


let userFirstName = readlineSync.question("What's your first name?");
console.log("Hello " + userFirstName);