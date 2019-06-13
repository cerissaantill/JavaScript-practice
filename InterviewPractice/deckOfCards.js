'use strict';

// Practice designing solutions to problems

// SHUFFLE A DECK OF CARDS:

// 1. make a representation of a deck of cards
//  - to shuffle, the cards' position & order must change
//  - arrays are good for representing position & order
//  NOTE: a standard deck is 52 cards:
//  - 2-9, plus Jack, Queen, King, Ace
//  - 4 suits: Spade, Heart, Diamond, Club

    // Practice: Make an array containing the cards in a standard deck.  Each card should contain its value and its suit.  Example formats:
    // "JH" --> Jack of Hearts
    // { value: "Jack", suit: "Heart" }

    // First, make an array of values.
    // Then, make an array of suits.
    // Then, combine those two arrays together.


let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["spades", "diamonds", "clubs", "hearts"];
let newDeck1 = [];

function getDeck() {
    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};
            newDeck1.push(values[j] + " of " + suits[i]);
            // push new value into deck
        }
    }
    console.log(newDeck1);
    console.log(newDeck1.length + " cards");
}



// 2. solve the problem for a small part, then generalize it (inductive reasoning)
//  - how do we shuffle one card?

    // Practice: Create a new array and place one random card from the old array into the new array.
    // Hint: Math.random()

function shuffle () {

    // switch the values of two random cards:
    let cardPosition1 = Math.floor(Math.random() * deck.length);
    let cardPosition2 = Math.floor(Math.random() * deck.length);

    // shuffle.push(deck[cardPosition1]);
    // console.log(deck[cardPosition2) = deck[shuffle]);
}

    //  - if we can shuffle one card, how do we shuffle all cards?
    // Practice: shuffle the deck of cards.


// Part 1: Loop through all the cards in the old deck, and randomly place them in a random position in the new deck.

function shuffleDeck () {
    let newDeck3 = [];

    for(let i = 0; i < deck.length; i++) {

        let randomPosition = Math.floor(Math.random() * deck.length);

        // while loop here
        newDeck3[randomPosition] = deck[i];
    }
    // return newDeck3;
}


// Part 2: Before placing the card in the new deck, check that there's nothing at that position.  If there is, then choose a new random index, until you found an empty one.  You may want to use a while loop for this.
    // Hint: if(!newDeck[randomPosition])


