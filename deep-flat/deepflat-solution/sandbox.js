import { deepFlat } from './deep-flat.js';


console.log(deepFlat([1, [2, [3, [4]], 5]])); //[1, 2, 3, 4, 5]

const anArray = ['a', ['b', [['c'], ['d']], 'e']];
console.log(deepFlat(anArray) !== anArray); // true, returns a new array
console.log(anArray);
console.log(deepFlat(anArray))


const nestedArray = [[1, 2, 3], [4, 5, [6, 7]], 8];
const flatArray = deepFlat(nestedArray);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8]

