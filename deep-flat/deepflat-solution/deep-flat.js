export function deepFlat(array = []) {
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
