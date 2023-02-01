import { flattenArray } from './deep-flat';

test('flattenArray works with a single-level array', () => {
  const input = [1, 2, 3, 4];
  const expectedOutput = [1, 2, 3, 4];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('flattenArray works with a multi-level array', () => {
  const input = [1, [2, [3, 4]]];
  const expectedOutput = [1, 2, 3, 4];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('flattenArray works with a multi-level array and multiple instances of sub-arrays', () => {
  const input = [1, [2, [3, 4]], [5, [6, 7]]];
  const expectedOutput = [1, 2, 3, 4, 5, 6, 7];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('flattenArray works with a multi-level array and objects', () => {
  const input = [1, [2, [3, 4]], { a: 5, b: [6, 7] }];
  const expectedOutput = [1, 2, 3, 4, { a: 5, b: [6, 7] }];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('flattenArray works with an empty array', () => {
  const input = [];
  const expectedOutput = [];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('flattens a nested array with multiple levels of depth', () => {
  const input = [1, [2, [3, [4, [5]]]]];
  const expectedOutput = [1, 2, 3, 4, 5];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('returns an empty array when given an empty array', () => {
  const input = [];
  const expectedOutput = [];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('flattens a mixed array of numbers and arrays', () => {
  const input = [1, [2, 3], [4, [5]], 6];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('flattens an array with nested arrays of different depths', () => {
  const input = [1, [2, [3]], [4], 5];
  const expectedOutput = [1, 2, 3, 4, 5];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('returns the same array when given a flat array', () => {
  const input = [1, 2, 3, 4, 5];
  const expectedOutput = [1, 2, 3, 4, 5];
  expect(flattenArray(input)).toEqual(expectedOutput);
});

test('flattenArray([1, 2, [3, 4, [5, 6]]]) returns [1, 2, 3, 4, 5, 6]', () => {
  expect(flattenArray([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('flattenArray([1, [2, [3, [4, [5, [6]]]]]]) returns [1, 2, 3, 4, 5, 6]', () => {
  expect(flattenArray([1, [2, [3, [4, [5, [6]]]]]])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
  ]);
});

test('flattenArray([[[[[[[[[1]]]]]]]]]) returns [1]', () => {
  expect(flattenArray([[[[[[[[[1]]]]]]]]])).toEqual([1]);
});

test('flattenArray([1, [2, 3], [[4, 5, 6], 7]]) returns [1, 2, 3, 4, 5, 6, 7]', () => {
  expect(flattenArray([1, [2, 3], [[4, 5, 6], 7]])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
  ]);
});

test('flattenArray([]) returns []', () => {
  expect(flattenArray([])).toEqual([]);
});

test('Flattens nested arrays', () => {
  const nestedArr = [1, [2, [3, [4, [5]]]]];
  const result = flattenArray(nestedArr);
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Handles empty arrays', () => {
  const emptyArr = [];
  const result = flattenArray(emptyArr);
  expect(result).toEqual([]);
});

test('Handles arrays with different levels of nesting', () => {
  const mixedArr = [1, [2, 3], [4, [5, 6]]];
  const result = flattenArray(mixedArr);
  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Flattens array with multiple levels of nesting', () => {
  const deeplyNestedArr = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
  const result = flattenArray(deeplyNestedArr);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
