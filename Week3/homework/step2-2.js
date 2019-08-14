'use strict';
function sayThree(number) {
  console.log(`your number ${number} is divisible by 3`);
}

function sayFive(number) {
  console.log(`your number ${number} is divisible by 5`);
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  // creating an empty number array and populating it:

  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push[i];

    // divisible by 3?
    if (i % 3 === 0) {
      console.log(threeCallback(i));
    } else if (i % 5 === 0) {
      console.log(fiveCallback(i));
    }
  }
}

// console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
