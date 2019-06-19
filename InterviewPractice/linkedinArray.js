'use strict';

// LinkedIn Learning
// Mastering Web Developer Interview Code

/**
var arr = [
    { name: "LinkedIn", link:"http://linkedin.com/in/planetoftheweb" },
    { name: "Blog", link:"http://raybo.org" },
    { name: "Twitter", link: "http://twitter.com/planetoftheweb" }
];
*/

// 1. Display this list in HTML
// 2. Target id of "myLinks"


let myTarget = document.querySelector('#myLinks');
let arr = [
    { name: "LinkedIn", link:"http://linkedin.com/in/planetoftheweb" },
    { name: "Blog", link:"http://raybo.org" },
    { name: "Twitter", link: "http://twitter.com/planetoftheweb" }
];

arr.forEach(function(item){
    let el = document.createElement('a');
    el.href = item.link;
    el.innerText = item.name;

    myTarget.appendChild(el);
});
