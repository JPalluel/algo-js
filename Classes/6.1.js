/* Create a class named Circle with attributes xPos, yPos and radius. Add a method named 
move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named 
surface that will return the surface of the circle.*/

class Circle {
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset){
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset;

    }

    get surface() {
        return Math.PI * this.radius * this.radius

    }
}

//Test its method and accessors by modifying the values and checking if everything is consistent.

let circle1 = new Circle ( 3, 3, 3);
//console.log(circle1);
circle1.move(2,2);

console.log(circle1)

let circle2 = new Circle ( 4, 2, 7);
console.log(circle2);