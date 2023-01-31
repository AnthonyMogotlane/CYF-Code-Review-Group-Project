export const difference = () => {
  let array = [1, 2, 3];
  const values = 1;

  array = array.filter((item) => item !== values);
  return array;
};
