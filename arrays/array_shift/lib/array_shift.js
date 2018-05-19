'use strict';

module.exports = exports = {};

exports.insertShiftArray = (arr, val) => {
  let newArr = [];
  let middle = arr.length/2;

  for(let i = 0; i < arr.length +1; i++) {
    if(i < middle) {
      newArr[i] = arr[i];
    }
    if(i == middle) {
      newArr[i] = val;
    }
    else if(i > middle) {
      newArr[i] = arr[i  -1];
    }
  }
  return newArr;
};