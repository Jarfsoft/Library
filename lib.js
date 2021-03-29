
// Define main elements in HTML
const addBookBtn = document.querySelector('#add-book-btn');
const myForm = document.querySelector('form');
const bookTitle = document.querySelector('#booktitle');
const bookAuthor = document.querySelector('#bookauthor');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#checkbox');
const bookSubmit = document.querySelector('#submitbtn');

// Create Book box section:
const boxSection = document.querySelector('#box-section');

const myLibrary = [];

class Library {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  pushToArr() {
    myLibrary.push(this);
  }
}

function addBookToLib() {
  const newBook = new Library(bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookRead.checked);
  myLibrary.push(newBook);

  // create elements for a book display:
  const boxDiv = document.createElement('div');
  const boxTitle = document.createElement('p');
  const boxAuthor = document.createElement('p');
  const boxPages = document.createElement('p');
  const boxRead = document.createElement('p');
  const removeBtn = document.createElement('button');
  const readBtn = document.createElement('button');
  removeBtn.innerText = 'Remove this book';

  // Add classes for style:
  boxDiv.classList = 'col-3 card bg-light p-2 m-2';
  boxTitle.classList = 'card-title font-weight-bold';
  removeBtn.classList = 'btn btn-warning m-1 p-1';
  // Data for display:
  boxTitle.innerText = `Book Title: ${bookTitle.value}`;
  boxAuthor.innerText = `Book Author: ${bookAuthor.value}`;
  boxPages.innerText = `Number of pages: ${bookPages.value}`;
  if (bookRead.checked === true) {
    boxRead.innerText = 'I read This book';
    readBtn.innerText = 'Not really , I did not read it !';
    readBtn.classList = 'btn btn-danger m-1 p-1';
  } else {
    boxRead.innerText = 'Opps , I did not read this book !';
    readBtn.innerText = 'I read this book';
    readBtn.classList = 'btn btn-success m-1 p-1';
  }

  // Append elements under its section:
  boxSection.appendChild(boxDiv);
  boxDiv.appendChild(boxTitle);
  boxDiv.appendChild(boxAuthor);
  boxDiv.appendChild(boxPages);
  boxDiv.appendChild(boxRead);
  boxDiv.appendChild(readBtn);
  boxDiv.appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
    boxDiv.remove();
  });

  readBtn.addEventListener('click', () => {
    if (bookRead.checked === true) {
      bookRead.checked = false;
      boxRead.innerText = 'Opps , I did not read this book !';
      readBtn.innerText = 'I read this book';
      readBtn.classList = 'btn btn-success m-1 p-1';
    } else {
      bookRead.checked = true;
      boxRead.innerText = 'I read This book';
      readBtn.innerText = 'Not really , I did not read it !';
      readBtn.classList = 'btn btn-danger m-1 p-1';
    }
  });
}


bookSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  if (bookTitle.value && bookAuthor.value && bookPages.value) {
    addBookToLib();
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.checked = false;
    myForm.classList.remove('show');
  } else alert('Fill all the blanks.');
});

addBookBtn.addEventListener('click', () => {
  bookRead.checked = false;
  myForm.classList = 'show';
});

boxSection.addEventListener('click', () => {
  myForm.classList.remove('show');
});