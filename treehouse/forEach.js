'use strict';


/** Use the forEach method to create a new Array of the capitalized version fo this Array:    */
    const fruits = ['apple', 'pear', 'cherry'];


    let capitalizedFruits = [];                       // First I create a new array for the capitalizedFruits

                                                      // Next, I iterate over the fruits array with forEach
    fruits.forEach(fruit => {               // inside the callback function, fruit will be a String from the fruits array

        let capitalizedFruit = fruit.toUpperCase();   // store the capitalized version of the String in a variable called capitalizedFruit
                                                      // capitalize that String with .toUpperCase
        capitalizedFruits.push(capitalizedFruit);     // now push the capitalized String into the capitalizedFruit array
    });

    console.log(capitalizedFruits);                   // log it to the console



