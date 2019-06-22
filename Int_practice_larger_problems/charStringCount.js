'use strict';


// Practice: Take a string and return that string, but with a number after each
// character, denoting the number of times it appears in the string.
// Example input:
// hello, how are you?
// Example output:
// h2e2l2,1 3h2o3w1 3a1r1e2 3y1o3u1?1



// get chars of String:
let countString = getCharCountString("Hello, how are you?")
console.log(countString);

function getCharCountString(str) {
    let counts = charCount(str);
    // insert the counts into the String and return:
    let countString = " "
    // convert the String into an Array, then loop through each character
    let countArray = str.split
    for (let i = 0; i <= str.length; i++) {

    }
    // get the count from "counts", append both the character and the count to a new String

}


function getCharCounts(str) {
    let counts = {}   // object key 'counts'
    // loop through each character in the string:
    for (let i = 0; i <= str.length; i++) {
        let c = str.charAt(i)

        // store the number of characters in "counts":
        if (!counts[c]) {
            counts[c] = 0   // the square bracket holds the key to the counts object
            // charCount[c] += 1;
        }
        counts[c]++
    }
    return counts;
}


// console.log(charCounts("Hello, how are you?"))
