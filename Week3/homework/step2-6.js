'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  // Replace this comment and the next line with your code
  let arr = [];
  for (var i = 0; i < arr2d.length, i++){
    for (var j = 0; j < arr2d[i].length; j++)
      arr.push(arr2d[i][j]);
  }
  //console.log(arr);
}

function flattenArray3d(arr) {
  // Replace this comment and the next line with your code
  const arr3dim = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        arr3dim.push(arr[i][j][k]);
      }
    }
  }
  return arr3dim;
  // console.log(arr);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
