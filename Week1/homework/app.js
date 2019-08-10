'use strict';

'use strict';

// array of books containing 10 strings. lowercase
const bookTitles = [
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

// Replace with your own code
// const showBooks = Object.values(bookNames);
// console.log(bookTitles);

// the part below not showing on console on chrome
// function printBookNames(bookTitles) {
//   console.table(bookTitles);
// }
//printing out the string of the above array produces:
// for (let i = 0; i < bookNames.length; i++) {
//   console.log(bookNames[i]);
// }
// eslint-disable-next-line no-unused-vars
// 1.3. Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

// 1.4 create object containing details of each book:
const bookInfo = {
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

  arrow_of_god: {
    title: 'Arrow of God',
    author: 'Chinua Achebe',
    language: 'English',
    published: 1964,
  },

  a_song_of_ice_and_fire: {
    title: 'A Song of Ice and Fire',
    author: 'George R.R. Martin',
    language: 'English',
    published: 1996,
  },
};
//console.log(Object.keys(bookInfo));

const bookImgs = {
  going_down_river_road: './bookImgs/going-down-river-road.jpg',
  the_river_between: './bookImgs/the_river_between.jpg',
  homing_in: './bookImgs/homing_in.jpg',
  americanah: './bookImgs/americanah.jpg',
  things_fall_apart: './bookImgs/things_fall_apart.jpg',
  animal_farm: './bookImgs/animal_farm.jpeg',
  arrow_of_god: './bookImgs/arrow_of_god.jpg',
  a_song_of_ice_and_fire: './bookImgs/a_song_of_ice_and_fire.jpg',
  the_dead_stay_dumb: './bookImgs/the_dead.jpg',
  the_river_and_the_source: './bookImgs/the_river.jpg',
};

function bookList() {
  const bookUl = document.createElement('ul');
  bookUl.id = 'bookContainer';
  document.body.appendChild(bookUl);

  for (let key in bookInfo) {
    const bookItems = document.createElement('li');
    bookItems.id = 'book-items';
    const bookTitle = document.createElement('h2');
    bookTitle.id = 'book-title';
    bookTitle.innerText = bookInfo[key].title;
    bookItems.appendChild(bookTitle);

    const bookDiv = document.createElement('div');
    bookDiv.setAttribute('id', key);
    bookItems.appendChild(bookDiv);

    const content = document.createAttribute('div');
    content.id = 'book-contents';
    content.innerText = `<p>Title: ${bookInfo[key].title}</p> 
  <p>Author: ${bookInfo[key].author}</p>
  <p>Language: ${bookInfo[key].language}</p>
  <p>Published: ${bookInfo[key].published}</p>`;
    //bookDiv.appendChild(content);
    bookUl.appendChild(bookItems);
  }
  //creating a function to add images to books:
  for (const bookKey in bookImgs) {
    const bookDiv = document.getElementById(bookKey);
    const imgContainer = document.createElement('div');
    imgContainer.id = 'book-img';
    bookDiv.appendChild(imgContainer);

    //adding pic from book obj with attr
    const pic = document.createElement('img');
    pic.setAttribute('src', bookImgs[bookKey]);
    imgContainer.appendChild(pic);
  }
}
bookList();
