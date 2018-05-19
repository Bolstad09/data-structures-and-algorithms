'use strict';

let arrayShift= require('../lib/array_shift.js');

describe('Array Shift', () => {

  it('shiftArray() will take an input array and will take the second input and place it in the middle of the array', () => {
    expect(arrayShift.insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
  });
  it('shiftArray() will take an input array and will take the second input and place it in the middle of the array', () => {
    expect(arrayShift.insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});