const addBookBtn = document.querySelector('button');
// const myForm = document.createElement('form');
const bookTitle= document.querySelector('#booktitle');
const bookAuthor= document.querySelector('#bookauthor');
const bookPages= document.querySelector('#pages');
const bookRead = document.querySelector('#checkbox');
const bookSubmit = document.querySelector('#submitbtn');

// Create Book box section:
const boxSection = document.querySelector('#box-section')
// let boxDiv = document.createElement('div');
// let boxTitle = document.createElement('h1');
// let boxAuthor = document.createElement('h1');
// let boxPages = document.createElement('h1');
// let boxRead = document.createElement('p');


let myLibrary = [];

function Book(title, author , pages , read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read
}

// function createBookBox(){
//   document.body.appendChild(boxDiv);
//   boxDiv.appendChild(boxTitle);
//   boxDiv.appendChild(boxAuthor);
//   boxDiv.appendChild(boxPages);
//   boxDiv.appendChild(boxRead);

  
// }
// book = new Book('test' , 'juan' , 500, true)
function addBookToLib(){
  let newBook = new Book(bookTitle.value , bookAuthor.value , bookPages.value , bookRead.checked )
  myLibrary.push(newBook);
  let boxDiv = document.createElement('div');
  let boxTitle = document.createElement('h1');
  let boxAuthor = document.createElement('h1');
  let boxPages = document.createElement('h1');
  let boxRead = document.createElement('p');
  let removeBtn = document.createElement('button');
  removeBtn.innerText = "Remove this book"
  boxTitle.innerText = bookTitle.value ;
  boxAuthor.innerText = bookAuthor.value;
  boxPages.innerText =  bookPages.value;
  boxRead.innerText = bookRead.checked === true ? "I read it" : "Not really !"
 
  document.body.appendChild(boxDiv);
  boxDiv.appendChild(boxTitle);
  boxDiv.appendChild(boxAuthor);
  boxDiv.appendChild(boxPages);
  boxDiv.appendChild(boxRead);
  boxDiv.appendChild(removeBtn);

  removeBtn.addEventListener('click' , function(){
    boxDiv.remove()
  })

}



bookSubmit.addEventListener('click', (e) => {
  // createBookBox();
  addBookToLib();
  e.preventDefault();
})