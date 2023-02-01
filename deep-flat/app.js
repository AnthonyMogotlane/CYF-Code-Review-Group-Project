function deepFlat(array = []) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(deepFlat(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

// This function uses a for loop to iterate over the elements in the input array.
// If an element is an array, it calls itself recursively to flatten that subarray.
// If the element is not an array, it pushes it onto the result array.Finally, it returns the result array.
