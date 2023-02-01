import { splitObject } from './split-object.js';

describe('Split an object into an array of objects', () => {
  it('expected object to be changed into an array of objects', () => {
    const expected = [
      { name: 'robs' },
      { age: 25 },
      { tall: true },
      { userName: 'sbor' },
    ];
    const received = splitObject({
      name: 'robs',
      age: 25,
      tall: true,
      userName: 'sbor',
    });
    expect(received).toEqual(expected);
  });
});
