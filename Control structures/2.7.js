const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Enter a number : "));
let total = 0; 

for(let i = 1; i<=n  ; i++){
    
    total = total +  new Number(readlineSync.question("enter another one "));

}

console.log(total);