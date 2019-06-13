'use strict';


/**  QUIZ:

 response to user input regardless of case used */


let answer = prompt("What programming language is the name of a gem?");

// conditional:
if ( answer.toUpperCase() === 'RUBY') {             // converts input to uppercase so that case doesn't matter
    document.write("<p>That's right!</p>");

} else {
    document.write("<p>Sorry, that's wrong.</p>")
}


/////////////////////////////////////////////////////////////////////////////////////////////////

/**   RANDOM NUMBER GENERATOR

 First - build a program that collects a number from a user,
 then prints out a random number from 1 to the number the user selects.

 Incorporate some of the commands you've learned so far:
 prompt() collect user input
 parseInt() convert the input to an integer
 Math.random() create a random number

 Second - prompt user for two random numbers, and provide and random number between the two.

 HINT: instead of generating a num between 1 - z, we need generate a num from x - z.
 */


let input1 = prompt("Choose a random number: ");  // store user input in a variable
let bottomNumber = parseInt(input1);  // convert string input into a true integer

let input2 = prompt("Choose another random number: ");
let topNumber = parseInt(input2);

let randomNumberGen = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// this creates the range for the randomly generated number

let message = "<p>" + randomNumberGen + " is a number between 1 and " + topNumber + ".</p>";
document.write(message);


// Math.random gives a floating point num between 0 - 1
// that will be multiplied by topNumber (the parsed input),
// then rounded down, and increased by 1 (since rounded down)  */

/////////////////////////////////////////////////////////////////////////////////////////////////


/**  RANDOM NUMBER GUESSING GAME

 This program generates a number between 1 and 6 and gives a player two attempts
 to guess the number.

 First - create a Random Number Guessing Game that prompts the user to guess a randomly
         generated number.

 Second - remove the else clause and add a boolean value, test the variable to match the condition.

 HINT: there will be 2 conditional statements

 Third - perform 3 tests:
            1.does the player's guess match the random number?
            2.if not, is the player's guess less than the random number?
            3.if not, is the player's guess greater than the random number?
 HINT: start by writing 2 else if clauses, then add conditions to each.
 */

// assume the player didn't guess correctly
let correctGuess = false;

let randomNumber = Math.floor(Math.random() *  6) +1;
let guess = prompt("I am thinking of a number between 1 and 6. What is it?");


if (parseInt(guess) === randomNumber) {    // input needs to be converted from a String to an Int
    correctGuess = true;

} else if (parseInt(guess) < randomNumber) {
    let guessMore = prompt("Try again. The number I am thinking of is more than " + guess);
    if (parseInt(guessMore) === randomNumber) {
        correctGuess = true;
    }

} else if (parseInt(guess) > randomNumber) {
    let guessLess = prompt("Try again. The number I am thinking of is less than " + guess);
    if (parseInt(guessLess) === randomNumber) {
        correctGuess = true;
    }
}
// test if player is correct and output response:
if (correctGuess) {
    document.write("<p>You guessed the number!</p>");
} else {
    document.write("<p>Sorry, the number was " + randomNumber + ".</p>");
}


/** explanation of code  */
// First, we created a variable with the boolean false value
// Next, we create a random number
// Then we open a dialog box and ask the user to supply a number
// Then, the program tests the user's response. if the user guessed the random number
//  correctly then the correctGuess variable is changed to true, meaning the player correctly
//  guessed the answer.
// If the player guesses incorrectly then the correctGuess variable stays the same, and the player
//  is prompted to guess again.
// If the player guesses incorrectly again, a prompt lets them know if the randomNumber was
//  greater or less than their guess.

// Then we have another conditional statement.
// We test the value of the correctGuess variable and print the appropriate message.

// One of the benefits of using boolean values is that it lets the program respond to
//  multiple conditional outcomes.

/////////////////////////////////////////////////////////////////////////////////////////////////


/** Programming Multiple Outcomes


 * */

// elseIf syntax:
// if () {
//
// } else if () {
//
// } else {
//
// }












































