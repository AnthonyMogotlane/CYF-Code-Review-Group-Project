import { intersection } from './intersection.js';

describe('should return values shared between two arrays', () => {
  it('[2, 1] and [2, 3] -> [2]', () => {
    expect([2]).toEqual(intersection([2, 1], [2, 3]));
  });
  it('[2, 1, 2] and [2, 3] -> [2]', () => {
    expect([2]).toEqual(intersection([2, 1, 2], [2, 3]));
  });
});
