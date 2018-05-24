'use strict';

module.exports = exports = {};

exports.binaryArray = (arr, key) => {
  let arrIndex = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == key) {
      arrIndex = i;
    }
  }
  return arrIndex;
};

function binarySearch (arr,searchKey){
  let upperBound = arr.length;
  let lowerBound = 0;
  let middle = math.floor(arr.length/2);
  let caidate = arr(middle);
  if (searchKey === candidate) {
    return middle
  }
  if(searchKey < cadidate){
    upperBound = middle;
  }
} 
if(searchKey < cadidate){
  lowerBound = middle;
}
 middle = Math.Floor((upperBound - lowerBound)/2);

 
return -1;
}