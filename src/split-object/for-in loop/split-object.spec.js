import { objectToArray } from './split-object.js';

describe('Object to Array', () => {
  it('Converts an object to an array', () => {
    const input = { name: 'John', age: 30 };
    const expectedOutput = [{ name: 'John' }, { age: 30 }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles an empty object', () => {
    const input = {};
    const expectedOutput = [];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts a complex object to an array', () => {
    const input = { name: 'John', age: 30, hobbies: ['reading', 'traveling'] };
    const expectedOutput = [{ name: 'John' }, { age: 30 }, { hobbies: ['reading', 'traveling'] },
    ];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles a numeric object', () => {
    const input = { 1: 'one', 2: 'two', 3: 'three' };
    const expectedOutput = [{ 1: 'one' }, { 2: 'two' }, { 3: 'three' }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles an object with nested objects', () => {
    const input = { name: 'John', details: { age: 30, city: 'New York' } };
    const expectedOutput = [{ name: 'John' }, { details: { age: 30, city: 'New York' } }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles an object with multiple nested objects', () => {
    const input = { name: 'John', details: { age: 30, city: 'New York' }, hobbies: { sport: 'Soccer', music: 'Rock' } };
    const expectedOutput = [{ name: 'John' }, { details: { age: 30, city: 'New York' } },
    { hobbies: { sport: 'Soccer', music: 'Rock' } }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles an object with undefined values', () => {
    const input = { name: 'John', age: undefined };
    const expectedOutput = [{ name: 'John' }, { age: undefined }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Handles an object with null values', () => {
    const input = { name: 'John', age: null };
    const expectedOutput = [{ name: 'John' }, { age: null }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with string values to an array', () => {
    const input = { firstName: 'John', lastName: 'Doe' };
    const expectedOutput = [{ firstName: 'John' }, { lastName: 'Doe' }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with number values to an array', () => {
    const input = { num1: 1, num2: 2 };
    const expectedOutput = [{ num1: 1 }, { num2: 2 }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with boolean values to an array', () => {
    const input = { isValid: true, isError: false };
    const expectedOutput = [{ isValid: true }, { isError: false }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with mixed values to an array', () => {
    const input = { name: 'John', age: 30, isValid: true };
    const expectedOutput = [{ name: 'John' }, { age: 30 }, { isValid: true }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with symbols to an array', () => {
    const symbol1 = Symbol('symbol1');
    const symbol2 = Symbol('symbol2');
    const input = { [symbol1]: 'value1', [symbol2]: 'value2' };
    const expectedOutput = [{ [symbol1]: 'value1' }, { [symbol2]: 'value2' }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with functions to an array', () => {
    const func1 = () => { };
    const func2 = () => { };
    const input = { func1, func2 };
    const expectedOutput = [{ func1 }, { func2 }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an empty object to an empty array', () => {
    const input = {};
    const expectedOutput = [];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with arrays to an array', () => {
    const input = {
      name: 'John',
      hobbies: ['Reading', 'Hiking'],
    };
    const expectedOutput = [{ name: 'John' }, { hobbies: ['Reading', 'Hiking'] }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with NaN values to an array', () => {
    const input = { value1: NaN, value2: NaN };
    const expectedOutput = [{ value1: NaN }, { value2: NaN }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with an undefined value to an array', () => {
    const input = { value: undefined };
    const expectedOutput = [{ value: undefined }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with null values to an array', () => {
    const input = { value1: null, value2: null };
    const expectedOutput = [{ value1: null }, { value2: null }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });

  it('Converts an object with numbers to an array', () => {
    const input = { value1: 10, value2: -10 };
    const expectedOutput = [{ value1: 10 }, { value2: -10 }];
    expect(objectToArray(input)).toEqual(expectedOutput);
  });
});
