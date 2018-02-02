"use strict";

var done = false;
var count = 0;
var numToGuess = Math.floor((Math.random() * 10) + 1);
while (!done) {
	var guessString = prompt("Guess the number (between 1 and 10):");
	if (guessString == null) {
		// cancel the game
		console.log("Quitting the game.");
		done = true;
	} else {
		var guess = parseInt(guessString);
		if (isNaN(guess)) {
			console.log("Please enter a valid number!");
		} else {
			if (numToGuess == guess) {
				console.log("You won!");
				console.log("It took you",count,"guesses.");
				done = true;
			} else {
				console.log("You tried", guess, "but the answer is", numToGuess);
				console.log("Nope, try again");
				count = count + 1;
			}
		}
	}
}

