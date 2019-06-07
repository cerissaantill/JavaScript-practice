'use strict';


/** use a forEach to calculate (add) a total cost and log it in the console:  */
    const prices = [6.75, 3.10, 4.00, 8.12];  // Total: 21.97


    let total = 0;                         // created var total to keep track of a total price and set it to 0

    prices.forEach(price => {    // iterate over prices array using forEach to get each price
     total += price;                       // add each price to the total and store that value back into var total
    });

    console.log(total);






/** create a new Array with only the names starting with S  */
    // hint: you'll have find check the first character of each name

    const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];


    let sNames = [];

    names.forEach(name => {
        if (name.charAt(0) === 'S') {
            sNames.push(name);
        }
    });

    console.log(sNames);






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

