'use strict';

let arrayBinary= require('../lib/array_binary_search.js');

describe('Binary Search Array', () => {

  it('binaryArray() will take an input and match it to the index of the array', () => {
    expect(arrayBinary.binaryArray([4, 8, 15, 16, 23, 42], 15)).toEqual(2);

  });
  describe('Binary Search Array', () => {

    it('binaryArray() will return -1 if the key is not in the array', () => {
      expect(arrayBinary.binaryArray([11,22,33,44,55,66,77], 90)).toEqual(-1);
  
    });

    describe('Binary Search Array', () => {

      it('binaryArray() will take an input and match it to the index of the array', () => {
        expect(arrayBinary.binaryArray([1, 2, 3, 4, 5, 6], 3)).toEqual(2);
    
      });
    });
  });
});