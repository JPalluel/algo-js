/*Create a function named average(arr) that takes an array of numbers 
as argument and returns the average.*/

let arr7 = [1,2,3,4,5,10,15];

function average(...arr){
    let sum = 0;
    for (let i = 0; i< arr.length; i++){        /* this function takes an array as parameters using the ... spread opeator */
        sum = sum + arr[i];                     // we create a variable that will stock the sum of all the array number,
    }                                           // adding each time it loops a number of the array
    sum = sum / arr.length;                     // The loop ends all numbers inside the given array are added
    return sum;
}
console.log(average(...arr7));


/*Create a function named min(arr) that takes an
array of numbers as argument and returns the minimum element.*/

function min(...arr){                               // This function uses a js math operator that analyses and array and give the smallest number
    return Math.min(...arr);
}
console.log(min(...arr7));


/*Create a function named max(arr) that takes an
array of numbers as argument and returns the maximum element.*/

function max(...arr){                               // this function uses a js math operator that analyses an array and give the biggest number
    return Math.max(...arr);
}

console.log(max(...arr7));


/*Create a program that asks a number to the user then generate that same amount 
of random numbers but also displays their average, min and max. 
To do so, use the three functions you just created as well as the multiRand(n) function
created in Exercise 3.
*/

const readlineSync = require("readline-sync");

function askNumber(){
    let j = new Number (readlineSync.question("how many random numbers do you want? "));
    return j;
}

function rand10(){
    return(Math.floor(Math.random()* 10)+1);
}

function multiRand(n){
    let arrayOfNb = [];
    for (let i = 0; i<n; i++){
        arrayOfNb.push(rand10());
    }
    return arrayOfNb;
}

function multitask(){
    var arrayOfNb = multiRand(askNumber());
    console.log(arrayOfNb);
    console.log(average(...arrayOfNb));
    console.log(max(...arrayOfNb));
    console.log(min(...arrayOfNb)); 
}


multitask();
