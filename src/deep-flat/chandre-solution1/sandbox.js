import { deepFlat } from './deep-flat.js';

/*
  anything goes in this file, it's yours to make mistakes and be messy
    you don't need to lint this file, it's only for you
    but formatting the sandbox can make things easier to read

  you can do any experiments you like to explore or debug your function
    the .spec.js file is for tests and final validation only, not experiments
    the main file should include only the exported function and jsdoc string
*/

//testing simple nested array

let nestArray = [["test"]];
let uncomplexArray = nestArray.join('');
console.log(uncomplexArray);

//when implementing this code, it seemed both arrays removed which is incorrect.
> console.log(nestArray.join(""));
test

//make it slightly more complicated/ Expecting [test, west, nest]
let nestArray = [["test"],["west"],["nest"]];

//had same problem but now tried mapping and then joining each el and it works
> nestArray.map(el => el.join(","));
[ 'test', 'west', 'nest' ]
> 
