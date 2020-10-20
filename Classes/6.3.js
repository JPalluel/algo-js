/* Create a program that will re-use the Rectangle class you created previously.
It should generate 1000 random instances of Rectangle with random positions and sizes.
then it will display all colliding rectangles amongst those that were generated that way.*/

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

//create ramdom size and position for a rectangle
function randomRectangle(){

    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
    let w = Math.floor((Math.random()*9)+1);
    let l = Math.floor((Math.random()*9)+1);
    let createRectangle = new Rectangle(x, y, w, l );

    return createRectangle;
}

//create an array of 10 rectangles with random different coordinates
function generate10Rectangle(){
    let arrOfRect= [];
    for(let i = 0; i<10; i++){
        arrOfRect.push(randomRectangle());
    }
    return arrOfRect;
}

//function that should display only rectangles that collide with each other but instead return every rectangle true of false if collide

function displayCollision(arrayOfRectangles){
    
    for(let i=0; i<arrayOfRectangles.length; i++){
        for(let j=1; j<arrayOfRectangles.length; j++){
            console.log(arrayOfRectangles[i].collides(arrayOfRectangles[j]));
            }
        }
    }



let lotOfRect = generate10Rectangle();
displayCollision(lotOfRect);
