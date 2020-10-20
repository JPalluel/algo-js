/*
Make a program that asks for an integer n and generates the n first Fibonacci numbers.
Yes, you'll have to search what the hell are Fibonacci numbers.
*/

const readlineSync = require("readline-sync");

const askNumbers = ()=>{
    n = new Number(readlineSync.question("Give me a integer"));
    return n;
}

const FibonacciNb = (firstNb , count) => { //this function takes 2 parameters: firstNumbers  
    let num1 = 0;                        //is the nb that gonna add to each other to generate the next nb
    let num2 = 1;                       // count is the n first nb of Fibonacci sequence
    let next = 0;
    let cnt = 2;                        // start at 2 because already 2 nb in the array : 0 and 1;
    
    while (cnt<count){
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        firstNb.push(next);
        cnt ++;
    }
    return firstNb;   
}

arrayFibonacci = FibonacciNb ( [0 , 1], askNumbers());

console.log(arrayFibonacci);