'use strict';


let answer = prompt("What programming language is the name of a gem?");

// conditional statement:

if ( answer.toUpperCase() === 'RUBY') {         // converts input to uppercase so that case doesn't give an incorrect error
    document.write("<p>That's right!</p>");

} else {
    document.write("<p>Sorry, that's wrong.</p>")
}