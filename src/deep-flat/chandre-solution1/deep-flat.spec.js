import { deepFlat } from './deep-flat.js';

describe('deepFlat flattens nested arrays into a single array', () => {
  describe('no arrays in arrays', () => {
    it('simple nest', () => {
      const expected = ['test', 'west', 'nest'];
      const received = deepFlat([['test'], ['west'], ['nest']]);
      expect(received).toEqual(expected);
    });
  });
});

