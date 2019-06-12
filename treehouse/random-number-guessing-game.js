'use strict';

/**
 This program that uses conditional statements to react to user input--

 Create a Random Number Guessing Game that prompts the user to guess a randomly
 generated number.
 */

let randomNumber = Math.floor(Math.random() *  6) +1;

let guess = prompt("I am thinking of a number between 1 and 6. What is it?");

// the input is always a String so we need to parseInt to get an integer:
if (parseInt(guess)=== randomNumber) {
    document.write("<p>You guessed the number!</p>")

} else {
    document.write("<p>Sorry, the number was " + randomNumber + "</p>");
}
