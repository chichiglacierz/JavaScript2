'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  //creating an empty number array and populating it:
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push[i];
    //divisible by 3?
    if (i % 3 === 0) {
      threeCallback[i];
    } else if (i % 5 === 0) {
      fiveCallback[i];
    }
  }
}

// Replace this comment and the next line with your code
console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);

//creating functions displaying output to user
function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log('${number} is divisible by 3');
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log('${number} is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

module.export = isDivisible;

// Do not change or remove anything below this line
module.exports = threeFive;
