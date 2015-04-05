//Battleship Game
/*
var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    }else{
        guesses = guesses + 1;
        
        if (guess == location1 || guess == location2 || guess == location3){
            alert("HIT!")
            hits = hits + 1;
            
            if (hits == 3) {
                isSunk = true;
                
                alert("You sank my battleships");
            }
        }else{
            alert("MISS")
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);
*/


function bake(degrees) {
    var message;
    
    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigirator!";
    } else {
        message = "That's a very comfortable temperature for me.";
        //setMode("bake")
        //setTemp(degrees);
    }
    return message;
}

var status = bake(300);
console.log (status);
