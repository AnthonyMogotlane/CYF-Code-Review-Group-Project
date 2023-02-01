import { splitObject } from './split-object.js';

/*
  anything goes in this file, it's yours to make mistakes and be messy
    you don't need to lint this file, it's only for you
    but formatting the sandbox can make things easier to read

  you can do any experiments you like to explore or debug your function
    the .spec.js file is for tests and final validation only, not experiments
    the main file should include only the exported function and jsdoc string
*/

// test Loop through array and return key/value pairs
let myObj = { a: 1, b: 2, c: 3 };

for(const key in myObj) {
console.log(key) };

//test final solution
let withNestedKeys = Object.entries(splitObject).map((entry) => {
  return { [entry[0]]: entry[1] };
});
console.log(withNestedKeys);
