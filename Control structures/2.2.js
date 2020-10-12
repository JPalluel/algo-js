const realineSync = require("readline-sync");

let min = new Number (realineSync.question("Give me a small number "));

let max = new Number (realineSync.question("Give me a greater one "));

let current = new Number (realineSync.question("Give me a number between the ones you gave me "));

if (min > max) {
    console.log("you got it wrong buddy...")
}

else if (current > min && current < max){

    console.log(current);
}



