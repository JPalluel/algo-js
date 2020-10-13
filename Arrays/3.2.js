const realineSync = require("readline-sync");


let arr = [1, 2, 3, 4, 5];
let sum= 0;

for (let i = 0; i< arr.length; i ++){

    sum += arr[i];
}

let average = sum / arr.length;

console.log(average);

// second array

let arr2= [100, 101, 102];

let sum2 = 0;

for (i = 0; i< arr2.length; i ++){
    sum2 += arr2[i];
}

let average2 = sum2 / arr2.length;

console.log(average2);