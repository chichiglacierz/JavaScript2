'use strict';
function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  // the following iterates the variables in numbers(with filter) and checking if they´re divisible by 2
  // const newNumbers = [];
  // for (let i = 0; i =numbers.length)
  numbers = numbers.filter(num => num % 2 === 1).map(num => num * 2);
  console.log(numbers);
  return numbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // output : [2, 6]

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
