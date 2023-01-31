const intersection1 = require('./intersection.js');

describe('should return values shared between two arrays', () => {
  it('[2, 1] and [2, 3] -> [2]', () => {
    const expected = [2];
    const received = intersection1([2, 1], [2, 3]);
    expect(received).toEqual(expected);
  });
  it('[2, 1, 2] and [2, 3] -> [2]', () => {
    const expected = [2];
    const received = intersection1([2, 1, 2], [2, 3]);
    expect(received).toEqual(expected);
  });
});
