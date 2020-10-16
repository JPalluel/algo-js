/* Create a function named askTvSerie() that will ask the user for the following data
about its favorite TV serie:

    Name
    Production year
    Names of the cast members (there can be as much as the user want)

That function must gather all the data in a single object and return it. 
The data structure must be elegant.*/


const readlineSync = require("readline-sync");

// function to allow multiple input for cast members
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

// function that asks about favorite tv show
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


/*Create a program that use that function to generate a TV serie object and display it 
to the user in JSON format.*/

function onJson(a){

    var myJson = JSON.stringify(a, null, 5);

    return myJson; 
}

console.log(onJson(askTvSerie()));