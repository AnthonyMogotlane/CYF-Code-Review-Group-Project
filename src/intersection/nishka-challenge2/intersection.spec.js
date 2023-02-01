/* eslint-disable linebreak-style */
import { intersection } from './intersection';

describe('Intersecting numbers from 2 arrays', () => {
  describe('returns numbers that are in both arrays', () => {
    it('whole numbers', () => {
      const expected = [2, 3, 5];
      const received = intersection([1, 2, 3, 2, 5, 5], [2, 3, 4, 5]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [-2.56];
      const received = intersection([-1.5, -3.00, -2.56, 0.9, -5.7], [-5.09, -3.01, -2.56, -1.4]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [38, 7.8];
      const received = intersection([5.6, 38, 5.9, 7.8], [7.8, 7, 38]);
      expect(received).toEqual(expected);
    });
  });
});
