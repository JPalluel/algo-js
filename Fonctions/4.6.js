/*Create a function factorial(a) that returns the factorial of a number.
That function must be recursive.*/

/*The factorial of a natural number is a number multiplied by "number minus one", then by
"number minus two", and so on till 1. The factorial of n is denoted as n!
By definition, a factorial  n! can be written as n * (n-1)!.*/

function factorial(a){
    if (a == 1){
        return a;
    }
    else{
        return a * (factorial(a -1));
    }
}

console.log(factorial(5));
