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

// Mutate an array declared with const
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

// Preventing object mutation
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// Using arrow function to be more concise
const magic = () => {
    "use strict";
    return new Date();
};

// Arrow function with parameters
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

// Setting default parameters to a function
const increment = (number, value = 1) => number + value;

// Rest parameter with function parameters
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
//turns into 
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
// using the rest parameter in the function, thus simplifying the problem.