const realineSync = require("readline-sync");

// program that duplicate  a given array

/*
first method:
arrCopy=[...arr];

console.log(arrCopy);*/


/* second method:

let arrCopy=[];

for (let i = 0; i< arr.length; i++){

    arrCopy=arr[i];
}
console.log(arrCopy);*/

/*Third method

let arr = [1, 2, 3, 4, 5];

let arrCopy = arr.slice();

console.log(arrCopy);*/

//push method

let arr = [1, 2, 3, 4, 5];
let arrCopy = []

for (let i = 0; i<arr.length ;i ++){
    
    arrCopy.push(arr[i]);
}

console.log(arrCopy);