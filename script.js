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

// for (let i = 1; i <= 9; i++){
//     let bookName = "Book" + i;
//     let author = "Author" + i;
//     let pages = i * 100;
//     let book = new Book(bookName, author, pages);
//     myLibrary.push(book);
// }

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
    const bookNodeList = document.querySelectorAll(".book-card");
    bookNodeList.forEach((node) => node.remove());
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

    // adding the cross icon
    const crossIcon = document.createElement("img");
    crossIcon.classList.add("close-icon");
    crossIcon.setAttribute("src", "./images/close-circle.png");

    bookCardDiv.appendChild(bookTitleP);
    bookCardDiv.appendChild(bookAuthorP);
    bookCardDiv.appendChild(bookPagesP);
    bookCardDiv.appendChild(crossIcon);

    mainContainer.appendChild(bookCardDiv);
    
}

// displayBooks();

//  opens addnewbook form and closes if open
const newBookBtn = document.getElementById("new-book-btn");

newBookBtn.addEventListener('click', showAddBookForm)

function showAddBookForm() {
    const formDiv = document.querySelector(".add-book-form");
    
    if(formDiv.hidden == false) {
        formDiv.hidden = true;
        newBookBtn.hidden = false;
    } else {
        formDiv.hidden = false;
        newBookBtn.hidden = true;
    }
}

// closes from, through showAddBookFrom() function toggle.
const closeFormBtn = document.getElementById("form-close-btn");
closeFormBtn.addEventListener('click', () => {
    showAddBookForm();
    resetBookAddedMessage(); // removes the message on form close.
});

// add new book thorough from
const form = document.querySelector(".add-book-form");

form.addEventListener('submit', addBook);
// addBookBtn.addEventListener('click', (e) => {
//     console.log(e.target);
// });

function addBook(event) {
    let bookName = document.getElementById("book_name").value;
    let bookAuthor = document.getElementById("book_author").value;
    let bookPages = document.getElementById("book_pages").value;
    
    // get values form radio buttons
    let isReadList = document.getElementsByName("isRead");
    let isReadValue;
    for (let i in isReadList) {
        if(i.checked){
            isReadValue = i.value;
        }
    }

    let book = new Book(bookName, bookAuthor, bookPages);
    myLibrary.push(book);

    displayBooks();
    event.preventDefault();

    writeBookAddedMessage(bookName);

    resetForm();
}

function resetForm (){
    document.getElementById("book_name").value = "";
    document.getElementById("book_author").value = "";
    document.getElementById("book_pages").value = "";

}

function writeBookAddedMessage (bookName) {
    let messageP = document.querySelector(".book-message");
    messageP.textContent = `${bookName} is added to your library.`;
}

function resetBookAddedMessage () {
    let messageP = document.querySelector(".book-message");
    messageP.textContent = "";
}