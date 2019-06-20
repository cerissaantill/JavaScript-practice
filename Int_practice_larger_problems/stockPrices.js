'use strict';


// Practice: Take a comma-delimited string of numbers (stock prices), and print a chart, where each line starts with the time index (array index), colon, then a number of dashes in proportion to the price.
// Example input:
// 4,3,10,9,5,1,6
// 0:----
// 1:---
// 2:----------
// 3:---------
// 4:-----
// 5:-
// 6:------

// HINT: start by splitting the String and looping through
// important parts: string concat &
// += does the operation & assignment at once


// define stock prices
let stockPrices = '4, 3, 10, 9, 5, 1, 6';

function printPrices(prices) {
    let pricesArray = prices.split(',');
    for (let i = 0; i <= pricesArray.length; i++) {
        for (let j = 0; j <= pricesArray[i]; j++) {
            // build the dashes here

        }
        console.log(pricesArray.join(\'-'\));
        // console.log(`${i}: dashes here`);
    }
}
