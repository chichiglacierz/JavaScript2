'use strict';
document.body.style.backgroundColor = '#40E0D0';

// array of books containing 10 strings. lowercase
const bookNames = [
  'going_down_river_road',
  'the_river_and_the_source',
  "salem's_lot",
  'americanah',
  'things_fall_apart',
  'animal_farm',
  'the_river_between',
  'the_dead_stay_dumb',
  'arrow_of_god',
  'a_song_of_ice_and_fire',
];

const showBooks = Object.values(bookNames);
console.log(showBooks);

// the part below not showing on console on chrome
// function printBookNames(bookNames) {
//   console.table(bookNames);
// }

//printing out the string of the above array:
for (let i = 0; i < bookNames.length; i++) {
  console.log(bookNames[i]);
}

const header = document.querySelector('header');
const h1 = header.querySelector('h1'); //getting h1 elem inside of header
h1.textContent = 'Loading Book Recommendations ..';

const p1 = header.querySelector('p');
p1.id = 'p1';
p1.innerHTML = '<i>Some of the books I have read over the past years include the following</i>';

// eslint-disable-next-line no-unused-vars
// 1.3. Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

// 1.4 create object containing details of each book:
const bookDetails = {
  going_down_river_road: {
    title: 'Going Down River Road',
    author: 'Meja Mwangi',
    language: 'English',
    published: 1976,
  },

  the_river_and_the_source: {
    title: 'The River And The Source',
    author: 'Margaret Ogola',
    language: 'English',
    published: 1994,
  },

  homing_in: {
    title: 'Salem´s Lot',
    author: 'Stephen King',
    language: 'English',
    published: 1975,
  },

  americanah: {
    title: 'Americanah',
    author: 'Chimamanda Ngozi Adichie',
    language: 'English',
    published: 2013,
  },

  things_fall_apart: {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    language: 'English',
    published: 1958,
  },

  animal_farm: {
    title: 'Animal Farm',
    author: 'George Orwell',
    language: 'English',
    published: 1945,
  },

  the_river_between: {
    title: 'The River Between',
    author: 'Ngugi wa Thiong´o',
    language: 'English',
    published: 1965,
  },

  the_dead_stay_dumb: {
    title: 'The Dead Stay Dumb',
    author: 'James Hardley Chase',
    language: 'English',
    published: 1939,
  },

  fictitious_book: {
    title: 'Arrow of God',
    author: 'Chinua Achebe',
    language: 'English',
    published: 1964,
  },

  and_another_one: {
    title: 'A Song of Ice and Fire',
    author: 'George R.R. Martin',
    language: 'English',
    published: 1996,
  },
};
console.log(Object.keys(bookDetails));

const createBookList = document.createElement('ul');
for (let key in bookDetails) {
  let li = document.createElement('li');
  li.id = 'book';
  //let  = document.createElement('p');
  li.innerText = bookDetails[key].title;
  li.innerText = bookDetails[key].author;
  li.innerText = bookDetails[key].language;
  li.innerText = bookDetails[key].published;
  createBookList.appendChild(li);
  document.getElementById('book-list').appendChild(createBookList);
}

console.log(createBookList);
