export const difference = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const secondArray = [1, 5];
  const result = array.filter((val) => {
    return !secondArray.find((a) => {
      return val === a;
    });
  });
  return result;
};
