/* Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and lenght. 
Add a method named collides(otherRectangle) that returns true only if the current rectangle collides 
with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases.*/

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    //define 4 sides of the rectangle
    get top(){ return this.topLeftYPos;}
    get right(){ return this.topLeftXPos+ this.width;}
    get bottom(){ return this.topLeftYPos + this.length;}
    get left() { return this.topLeftXPos;}

    collides(otherRectangle){
        if(this.top > otherRectangle.bottom ||
            this.right < otherRectangle.left ||
            this.bottom < otherRectangle.top ||
            this.left> otherRectangle.right) {
                return false;
            } else {
            return true;
        }
    }
}


let rectangle1= new Rectangle(6,6,2,2);
let rectangle2= new Rectangle(4,4,4,4);

console.log(rectangle1.collides(rectangle2));//true

