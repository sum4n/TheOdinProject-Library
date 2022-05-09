let myLibrary = [];

function Book(title, author, pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = true;
}


function addBookToLibrary() {
    // do stuff here
    let bookName = createBook();
    myLibrary.push(bookName);
    console.table(myLibrary);
}

// Dummy data

for (let i = 1; i <= 9; i++){
    let bookName = "Book" + i;
    let author = "Author" + i;
    let pages = i * 100;
    let book = new Book(bookName, author, pages);
    myLibrary.push(book);
}

// Dummy data ends

// myLibrary.forEach( (book) => console.log(book.title, book.author, book.pages));
// console.table(myLibrary);

function createBook () {
    let bookTitle = prompt("Title: ");
    let bookAuthor = prompt("Author: ");
    let bookPages = prompt("Pages: ")

    let book = new Book(bookTitle, bookAuthor, bookPages);

    return book;
}

function displayBooks() {
    myLibrary.forEach(showBooks);
}


function showBooks(book) {

    const mainContainer = document.querySelector(".main-container");

    const bookCardDiv = document.createElement("div");
    bookCardDiv.classList.add("book-card")

    const bookTitleP = document.createElement("p");
    bookTitleP.classList.add("book-title");
    bookTitleP.textContent = book.title;

    const bookAuthorP = document.createElement("p");
    bookAuthorP.classList.add("book-author");
    bookAuthorP.textContent = book.author;

    const bookPagesP = document.createElement("p");
    bookPagesP.classList.add("pages");
    bookPagesP.textContent = book.pages;

    bookCardDiv.appendChild(bookTitleP);
    bookCardDiv.appendChild(bookAuthorP);
    bookCardDiv.appendChild(bookPagesP);

    mainContainer.appendChild(bookCardDiv);
    
}

displayBooks();

const newBookBtn = document.getElementById("new-book-btn");

newBookBtn.addEventListener('click', showAddBookForm);

function showAddBookForm() {
    //
}