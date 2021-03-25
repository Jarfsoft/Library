const addBookBtn = document.querySelector('button');
// const myForm = document.createElement('form');
const bookTitle= document.querySelector('#booktitle');
const bookAuthor= document.querySelector('#bookauthor');
const bookPages= document.querySelector('#pages');
const bookRead = document.querySelector('#checkbox');
const bookSubmit = document.querySelector('#submitbtn');

// Create Book box section:
const boxSection = document.querySelector('#box-section')
const boxDiv = document.createElement('div');
const boxTitle = document.createElement('h1');
const boxAuthor = document.createElement('h1');
const boxRead = document.createElement('p');


let myLibrary = [];

function Book(title, author , pages , read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

// book = new Book('test' , 'juan' , 500, true)
function addBookToLib(){
  let newBook = new Book(bookTitle.value , bookAuthor.value , bookPages.value , bookRead.checked );
  // console.log(newBook)
}

function createBookBox(){
  boxSection.appendChild(boxDiv);
  boxDiv.appendChild(boxTitle);
  boxDiv.appendChild(boxAuthor);
  boxDiv.appendChild(boxRead);
  boxTitle.innerText = bookTitle.value;
  boxAuthor.innerText = bookAuthor.value;
  boxRead.innerText = bookRead.checked === true ? "I read it" : "Not really !"
}

bookSubmit.addEventListener('click', (e) => {
  createBookBox();
  e.preventDefault();
})