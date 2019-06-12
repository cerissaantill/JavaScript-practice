'use strict';


let answer = prompt("What programming language is the name of a gem?");

// conditional:
if ( answer.toUpperCase() === 'RUBY') {             // converts input to uppercase so that case doesn't matter
    document.write("<p>That's right!</p>");

} else {
    document.write("<p>Sorry, that's wrong.</p>")
}