function test(param) {}
const something = function() {};

const arrowFunc = () => {};

const ages = [21, 41, 5, 1, 6, 4, 7];

const lessThan10 = [];

for (age of ages) {
  if (age < 10) {
    lessThan10.push(age);
  }
}

/* 
    I want console to show:
        Book title is Deathly Hallows
        Book author is JKRowling
        Book price is 23.12
*/
const harryPotter = { title: 'Deathly Hallows', author: 'JKRowling', price: 23.12 };

const gabe = { age: 30 };
gabe.age; // 30
gabe['age']; // 30
const something = 'age';
gabe[something]; // 30

for (let key in harryPotter) {
  console.log(`Book ${key} is ${harryPotter[key]}`);
}

// Book title is Deathly Hallows
// Book author is JKRowling
// Book price is 23.12

// const lessThan10Alt = ages.filter(age => {
//   // boolean---true or false
//   // if you return true--- it will be in the new array
//   // if you return false--- it won't
//   return age < 10; // true or false
// });

const lessThan10Alt = ages.filter(age => age < 10);

const lessThan10Alt = ages.filter(age => {
  return age < 10;
});
const lessThan10Alt = ages.filter(function(age) {
  return age < 10;
});
const lessThan10Alt = ages.filter(function lessThan10(age) {
  return age < 10;
});

lessThan10(102);

function lessThan10(age) {
  return age < 10;
}
const lessThan10Alt = ages.filter(lessThan10);

const spotifUsers = [
  { username: 'luxor123', userId: '1235' },
  { username: 'monkey', userId: '6245' },
  { username: 'spsa22', userId: '858393' },
];

// console.log all of the userId's
console.log(spotifUsers[0].userId);
console.log(spotifUsers[1].userId);
console.log(spotifUsers[2].userId);

// use a forEach to do the same thing

spotifUsers.forEach(userObj => {
  console.log(userObj.userId);
});
/*
    Will print:the user id´s
        1235
        6245
        858393
*/
