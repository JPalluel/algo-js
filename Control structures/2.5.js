const readlineSync = require("readline-sync");


let favNumber = new Number(readlineSync.question("What is your favorite number?"));


    while(favNumber!=42){
        console.log("are you sure?");
        favNumber = new Number(readlineSync.question("What is your favorite number?"))
    }
