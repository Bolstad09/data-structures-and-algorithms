'use strict';
function reverseArray(input) {
  var answer = new Array;
  for(var i = input.length-1; i >= 0; i--) {
    answer.push(input[i]);
  }
  return answer;
}

module.exports = reverseArray;

