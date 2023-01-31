// Function to remove duplicates on the array
const removeDuplicate = (arr) => arr.filter((e, i) => arr.indexOf(e) === i);
// Function to return an array of values shared between two arrays
export const intersection = (arr1, arr2) => {
  const result = [];
  for (const num of removeDuplicate(arr1)) {
    if (removeDuplicate(arr2).includes(num)) result.push(num);
  }
  return result;
};
