const readlineSync = require("readline-sync");


let favNumber = new Number(readlineSync.question("Give me a number between 1 and 7 "));

if (favNumber == 1){
    console.log("Monday");
}

else if(favNumber == 2){
    console.log("Tuesday");
}

else if  (favNumber == 3) {
    console.log("Wednesday");
}

else if  (favNumber == 4) {
    console.log("Thursday");
}

else if  (favNumber == 5) {
    console.log("Friday");
}

else if  (favNumber == 6) {
    console.log("Saturday");
}

else if  (favNumber == 7) {
    console.log("Friday");
}

else {
    console.log("You misunderstood I'm afraid...");
}