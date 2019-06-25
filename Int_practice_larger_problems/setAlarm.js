'use strict';


/**
 CODEWARS 6/25/19

 Write a function named setAlarm which receives two parameters.
 The first parameter, isEmployed, is true whenever you are employed and
 the second parameter, onVacation, is true whenever you are on vacation.


 The function should return true if you are employed and not on vacation
 (because these are the circumstances under which you need to set an alarm).
 It should return false otherwise.
 */



function setAlarm(isEmployed, onVacation) {

    if (isEmployed === true && onVacation === true) {
        return false;
    } else {
        if (isEmployed === false && onVacation === false) {
            return false;
        } else {
            if (isEmployed === false && onVacation === true) {
                return false;
            } else {
                return true;
            }
        }
    }
}
console.log(setAlarm());




// Refactored:

function setAlarm2(isEmployed, onVacation) {
    if (isEmployed === true && onVacation === false) {
        return true;
    } else {
        return false;
    }
}
console.log(setAlarm2());