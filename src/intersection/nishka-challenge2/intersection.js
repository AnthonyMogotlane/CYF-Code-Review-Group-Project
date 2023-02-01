/* eslint-disable linebreak-style */

export const intersection = (arr1, arr2) => {
  // get rid of all duplicate numbers
  const array = arr1.filter((item, index) => arr1.indexOf(item) === index);
  // return numbers that are in both arrays
  return array.filter((num) => {
    return arr2.includes(num);
  });
};
