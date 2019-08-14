'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// In the first example, x is a global variable meaning that it can be accessed in and out of the function. When the
// value of x is passed in the function, the function adds one to it and returns a value of 10.

// In the second function, the value of y is an object containing a key and a value.
// when the object is passed in the function, one is added to the value of the object itself
//  and the value of the value increases by 1 and we get  {x: 10}
