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

// myLibrary.forEach( (book) => console.log(book));
console.table(myLibrary);

function createBook () {
    let bookTitle = prompt("Title: ");
    let bookAuthor = prompt("Author: ");
    let bookPages = prompt("Pages: ")

    let book = new Book(bookTitle, bookAuthor, bookPages);

    return book;
}