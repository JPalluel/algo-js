/*
Create a function named rand10() that returns a random integer between 1 and 10.
Create a program that will display the result of that function each time it is run.

Write a documentation for the rand10() function.*/ 

function rand10(){
    return(Math.floor(Math.random()* 10)+ 1);
}
 //function is called rand10, it takes two parameters : min and max. When called,
// it returns a rounded random number in between the 2 parameters


console.log(rand10());