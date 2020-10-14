/*Create a function named average(arr) that takes an array of numbers 
as argument and returns the average.*/
let arr7 = [1,2,3,4,5,10,15];

function average(...arr){
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
        sum = sum + arr[i];
    }
    sum = sum / arr.length;
    return sum;
}
console.log(average(...arr7));

/*Create a function named min(arr) that takes an
array of numbers as argument and returns the minimum element.*/

function min(...arr){
    return Math.min(...arr);
}
console.log(min(...arr7));

/*Create a function named max(arr) that takes an
array of numbers as argument and returns the maximum element.*/

function max(...arr){
    return Math.max(...arr);
}

console.log(max(...arr7));
