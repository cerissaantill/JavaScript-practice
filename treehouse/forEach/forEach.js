'use strict';


/** forEach Syntax:   */

    arr.forEach(function callback (currentValue, index, array) {
        // your iterator
    }[thisArg]);

//  PARAMETERS

//  Callback - function to execute for each element, taking in three arguments:
//      currentValue - the value of the current element being processed in the array.
//      index - the index of the current element being processed in the array.
//      array - the array that forEach() is being applied to.



/** converting a for loop to forEach */
    const items = ['item1', 'item2', 'item3'];
    const copy = [];


    // before
    for (let i=0; i < items.length; i++) {
        copy.push(items[i]);
    }

    // after
    items.forEach(item => {
        copy.push(item);
    });





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



