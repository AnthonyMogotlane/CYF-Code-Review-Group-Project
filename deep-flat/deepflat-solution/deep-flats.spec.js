import { deepFlat } from './deep-flat.js'

describe('deepFlat', () => {
  it('flattens an array with nested arrays', () => {
    const input = [1, [2, [3, [4]]], 5];
    const expected = [1, 2, 3, 4, 5];
    expect(deepFlat(input)).toEqual(expected);
  });

  it('handles empty arrays', () => {
    const input = [];
    const expected = [];
    expect(deepFlat(input)).toEqual(expected);
  });

  it('handles arrays with only one level of nesting', () => {
    const input = [1, [2, 3], 4];
    const expected = [1, 2, 3, 4];
    expect(deepFlat(input)).toEqual(expected);
  });

  it('handles arrays with multiple levels of nesting', () => {
    const input = [1, [2, [3, [4, [5]]]], 6];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(deepFlat(input)).toEqual(expected);
  });

  it('handles arrays with a mix of numbers and strings', () => {
    const input = [1, [2, 'hello', [3, [4]]], 5];
    const expected = [1, 2, 'hello', 3, 4, 5];
    expect(deepFlat(input)).toEqual(expected);
  });
});
