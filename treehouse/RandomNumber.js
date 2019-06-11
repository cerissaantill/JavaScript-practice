'use strict';

/**
 Random Number Generator:

 First - build a program that collects a number from a user,
 then prints out a random number from 1 to the number the user selects.

     Incorporate some of the commands you've learned so far:
         prompt() collect user input
         parseInt() convert the input to an integer
         Math.random() create a random number

 Second - prompt user for two random numbers, and provide and random number between the two.
    HINT: instead of generating a num between 1 - z, we need generate a num from x - z.
*/

let input1 = prompt("Choose a random number: "); // store user input in a variable
let bottomNumber = parseInt(input1);


let input = prompt("Choose another random number: ");
let topNumber = parseInt(input);    // convert string input into a true integer
let randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// this creates the range for the randomly generated number

let message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + ".</p>";
document.write(message);



// Math.random gives a floating point num between 0 - 1
// that will be multiplied by topNumber (the parsed input),
// then rounded down, and increased by 1 (since rounded down)