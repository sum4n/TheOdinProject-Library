let myLibrary = [];

function Book(title, author, pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = true;
}


// Dummy data
let bookName = "Angels & Demons";
let author = "Dan Brown";
let pages = 768;
let book = new Book(bookName, author, pages);
myLibrary.push(book);
// Dummy data ends

let bookIndex = 0; // for data-attribute index of cross icon
function displayBooks() {
    const bookNodeList = document.querySelectorAll(".book-card");
    bookNodeList.forEach((node) => node.remove());
    // resets the bookIndex as bookcards get reset
    bookIndex = 0;
    myLibrary.forEach(showBooks);
    removeBook();
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
    bookPagesP.textContent = `Pages: ${book.pages}`;

    // adding the cross icon
    const crossIcon = document.createElement("img");
    crossIcon.classList.add("close-icon");
    crossIcon.setAttribute("src", "./images/close-circle.png");

     // data-attribute for close button
    crossIcon.dataset.index = bookIndex;
    bookIndex += 1;

    bookCardDiv.appendChild(bookTitleP);
    bookCardDiv.appendChild(bookAuthorP);
    bookCardDiv.appendChild(bookPagesP);
    bookCardDiv.appendChild(crossIcon);

    mainContainer.appendChild(bookCardDiv);
    
}

displayBooks();

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


function removeBook () {
    let closeIcons = document.querySelectorAll(".close-icon");
    
    closeIcons.forEach(icon => icon.addEventListener('click', () => {
        myLibrary.splice(icon.dataset.index, 1);
        displayBooks();
    }));
}
