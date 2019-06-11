'use strict';

/**
 Random Number Generator:
 build a program that collects a number from a user,
 then prints out a random number from 1 to the number the user selects.

 Incorporate some of the commands you've learned so far:
     prompt() collect user input
     parseInt() convert the input to an integer
     Math.random() create a random number
*/


let input = prompt("Choose a random number: "); // store user input in a variable

let topNumber = parseInt(input);    // convert string input into a true integer

let randomNumber = Math.floor(Math.random() * topNumber) + 1;
// Math.random gives a floating point num between 0 - 1
// that will be multiplied by topNumber (the parsed input),
// then rounded down, and increased by 1 (since rounded down)

let message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + ".</p>";

document.write(message);

