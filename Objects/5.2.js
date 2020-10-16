/* Create a function named randomizeCast(tvSerie) that will take as argument the data
structure you defined in the previous exercise and return a list of the same cast but 
in a random order.*/

const readlineSync = require("readline-sync");

/*
First test but doesn't work properly : only 4 inputs possible and don't push last one
function questionCast(){
    let actors = [];
    let questionActors = readlineSync.question("Who plays in it? ") 
    for(let i = 0; i<=questionActors.length; i ++){
        questionActors =  readlineSync.question("Someone else? if NO just press enter ");
        actors.push(questionActors);
    }
    return actors;
}
*/

function questionCast(){
    let actors = [];
    let askActors = "";
    do{
        askActors = readlineSync.question('Enter cast members , enter a blank space when over ');
        if (askActors!=""){
        actors.push(askActors);}
    } while (askActors!=="");
    return actors

}


function randomizeCast(arr) {
    let newPos;
    let temporaryPos;

    for (i = arr.length -1; i > 0; i--) {               // fisher yates algorithm
        newPos = Math.floor(Math.random ()* (i + 1));
        temporaryPos = arr[i];
        arr[i]= arr[newPos];
        arr[newPos] = temporaryPos;
    }
    return arr

}

/*console.log(randomizeCast(questionCast()));*/


/*Create a program that will use randomizeCast(tvSerie) and askTvSerie()
to ask the user about a TV serie then display a randomized list of the previous cast that
will form the new cast of your next serie.*/

function askTvSerie(){
    let name = readlineSync.question("What is your favorite TV serie? ");
    let productionYear = readlineSync.question("Which year was is produced? ");
    let castMembers = questionCast();
    let favoriteTvShow = {
        name : name,
        yearOfProduction : productionYear,
        actors : castMembers,
    }
    return favoriteTvShow;
}


function newCast(){

        let tvSerie = askTvSerie();
        let newCast = randomizeCast(tvSerie.actors);
        console.log('the cast for your next serie is '+ newCast);
}

newCast();