const removeDuplicate = (arr) => arr.filter((e, i) => arr.indexOf(e) === i);

const intersection = (arr1, arr2) => {
  const result = [];
  for (const num of removeDuplicate(arr1)) {
    if (removeDuplicate(arr2).includes(num)) result.push(num);
  }
  return result;
};

console.log(intersection([5, 2, 1, 2, 2, 4, 4], [4, 2, 3, 2, 2, 2, 5]));
