const realineSync = require("readline-sync");



function calcSurface(length, width) {
    return length * width;
}

/* The function is called calcSurface. It has 2 parameters( length and width). When called, return their  multiplication*/


let widthofR = realineSync.question("What is the width of the rectangle? ");

let heightofR = realineSync.question("What is the heigth of the rectangle? ");

console.log(calcSurface(widthofR, heightofR));
