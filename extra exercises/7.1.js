/*Make a program that generates an integer between 1 and 100 (don't display it to the user).

Then the program should display "Guess the number" and ask the user to guess.
If the user enters a number which is too low it should display "Too low" and re-ask the question. 
If the user enters a number which is too high it should display "Too high" and re-ask the question. 
If the user guess correctly it should display "Well guessed!" and exit.*/

const readlineSync = require("readline-sync");

//generation of a random number
const generateInt = () => {
    let c = Math.round(Math.random()*100)+1;
    return(c);
}


function guessInt(){
    let int = generateInt();
    let guess;

    while(guess !== int){

        guess = new Number(readlineSync.question('Guess a number, between 0 and 100 '));

        if(guess < int){
        console.log("Too low...");
        }
        else if(guess>int){
        console.log("Too high...");
        }
        else if (guess = int){
            console.log("Well done");
        }
    }
}
guessInt();
