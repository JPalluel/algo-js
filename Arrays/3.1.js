const realineSync = require("readline-sync");

let arr = [ 1, 2, 3, 4, 5];

var sum = 0;

/*for ( let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

}
*/

for(element of arr){
    sum += element;
}

console.log(sum);



let arr2 = [100, 101, 102];

var sum2 = 0;

for(let i = 0; i < arr2.length; i++){
    sum2+=arr2[i];
}
console.log(sum2);