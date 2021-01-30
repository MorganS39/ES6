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

//Using the spread operator to evaluate arrays in-place.
//The arr2 argument allows us to transfer the contents of arr1 into arr2 easily
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// Destructuring assignments ot extract values from objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES;

// Destructuring assignment to assign variables from objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

//Using destructuring assignments to assign variables from nested objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

//using destructuring to assign variables from arrarys
let a = 8, b = 6;
[a, b] = [b, a];

// Destructing assignment with the rest parameter to reassign array elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);

//Destructing to pass an object as a functions parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min }) => (max + min) / 2.0; 

// Creating strings using template literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);

  return failureItems;
}

const failuresList = makeList(result.failure);

//concise object literal declarations using object property shorthand
const createPerson = (name, age, gender) => {
  return ({
    name, age, gender
  });
};

//Concise declarative functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//use class syntax to define a constructor function
class Vegetable {
  constructor(name) {
      this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); 

//Use getters and setters to control access to an object
class Thermostat {
  constructor(Fahrenheit) {
      this.Fahrenheit = Fahrenheit;
  }
  get temperature() {
      return (5/9) * (this.Fahrenheit - 32);
  }
  set temperature(Celsius) {
      this.Fahrenheit = (Celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

//Create a module script to link JS to a html file
// Example commented as not to break other code by accidentally importing!
/*
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
*/

//Export to share a code block
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString};

//Reuse JS code using import
import {uppercaseString, lowercaseString} from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

//Using * to import everything from a file
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");