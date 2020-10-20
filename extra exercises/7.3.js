/*Make a program that asks for a positive integer.
Then display all the divisors of that integer which are not 1 or itself.
Examples:
    7 => nothing (it's a prime number)
    10 => 2 5
    9187 => nothing (it's a prime number too)
    134234 => 2 41 82 1637 3274 67117
*/

const readlineSync = require("readline-sync");

let askNumb = readlineSync.question('Enter a positive integer ');

function displayDivisors(num){

    if (num != 1 && num != 0) {
        let divisors = [];
        let x = num - 1;      // num -1 because we dont want it to divide by himself
        while (x > 1) {
            if (num % x === 0) {
                divisors.push(x);
                x--;
            } else {
                x--;
            }
        }
    console.log("its divisors are " + divisors);
    }
}

displayDivisors(askNumb);