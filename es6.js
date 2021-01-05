// Comparing var and let keywords
let catName;
let quote;
function catTalk() {
    "use strict";
    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();

// Comparing the scope of var and let keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

// Using the const keyword
function printManyTimes(str) {
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");