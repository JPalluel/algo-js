/*Create a function named calcDistance which takes the coordinates of 
two different points A and B in a 2D space.
That function must return the distance between those two points. */


function calcDistance(pointA, pointB){
    var xDiff= pointA.x - pointB.x;
    var yDiff = pointA.y - pointB.y;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

let a = { x : 1 , y : 1}; // these variables are objects with 2 keys : x and y an their values;
let b = { x : 2 , y : 2};

console.log(calcDistance( a, b));

/* The function is called calcDistance, it takes two parameters (this parameters are coordinates
so they both have an x and a y position).
To calculate the distance between these two points, we need to calculate the 
difference between their x position and their y position  ( stored in xDiff and yDiff)
once we have the difference, we use the square root js function to calculate the formula 
(thanks to Pythagoras) and get the Distance  */