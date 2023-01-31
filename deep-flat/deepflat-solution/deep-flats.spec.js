import { deepFlat } from './deep-flat.js'

describe('deepFlat', () => {
  describe('flattens an array of numbers', () => {
    it('with positive numbers', () => {
      const expected = [1, 2, 3, 4, 5];
      const received = deepFlat([1, [2, [3]], [4, 5]]);
      expect(received).toEqual(expected);
    });
    it('with negative numbers', () => {
      const expected = [-1, -2, -3, -4, -5];
      const received = deepFlat([-1, [-2, [-3]], [-4, -5]]);
      expect(received).toEqual(expected);
    });
    it('with mixed positive and negative numbers', () => {
      const expected = [-1, 2, -3, 4, -5];
      const received = deepFlat([-1, [2, [-3]], [4, -5]]);
      expect(received).toEqual(expected);
    });
  });
  describe('flattens an array of arrays', () => {
    it('with arrays of numbers', () => {
      const expected = [[1, 2], [3, 4], [5]];
      const received = deepFlat([[1, 2], [[3, 4]], [5]]);
      expect(received).toEqual(expected);
    });
    it('with arrays of arrays', () => {
      const expected = [[[1, 2]], [[3, 4]], [[5]]];
      const received = deepFlat([[[1, 2]], [[[3, 4]]], [[[5]]]]);
      expect(received).toEqual(expected);
    });
  });
  describe('has no side-effects', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = deepFlat(arg);
      const areDifferent = arg !== returned;
      expect(areDifferent).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = [[1, 2], [3, 4], [5]];
      deepFlat(arg);
      expect(arg).toEqual([[1, 2], [3, 4], [5]]);
    });
  });
});
