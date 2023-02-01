function intersection(array = [], values = []) {
  return array.filter(value => values.includes(value));
}