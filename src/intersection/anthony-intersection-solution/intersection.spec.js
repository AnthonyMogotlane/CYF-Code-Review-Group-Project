import { intersection } from './intersection.js';

describe('should return values shared between two arrays', () => {
  it('[2, 1] and [2, 3] -> [2]', () => {
    expect([2]).toEqual(intersection([2, 1], [2, 3]));
  });
  it('[2, 1, 2] and [2, 3] -> [2]', () => {
    expect([2]).toEqual(intersection([2, 1, 2], [2, 3]));
  });
  it('[5, 5, 2, 2] and [2, 3, 4, 5] -> [5, 2]', () => {
    expect([5, 2]).toEqual(intersection([5, 5, 2, 2], [2, 3, 4, 5]));
  });
  it('[5, 5, 1, 2, 3] and [3, 4, 5] -> [5, 3]', () => {
    expect([5, 3]).toEqual(intersection([5, 5, 1, 2, 3], [3, 4, 5]));
  });
  it('[10, 11, 1, 2, 3, 5] and [3, 4, 6, 10, 11] -> [10, 11, 3]', () => {
    expect([10, 11, 3]).toEqual(intersection([10, 11, 1, 2, 3, 5], [3, 4, 6, 10, 11]));
  });
});
