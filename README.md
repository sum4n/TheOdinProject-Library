# TheOdinProject-Library

Project to check knowledge of Objects, Object Constructors,
Prototype, Ptototypical Inheritance.

Made basic html with title Library and 2 dummy hard coded books.
Used text-align to center Libray title.
Used flexbox to center 'New Book' button.
Used grid to place book cards.

'Add book form' is hidden and will be toggled with 'New Book' button,
hidden = true/false in js.

'Add book form' is centered with flexbox and difinite input and label width.


// js
displayBooks() uses for each to display books on the page.

showBooks() does all the dom modifications. 
**showBooks() needs to clear pervious books' dom elements before
adding new books or books are getting added over books.
Did this displayBooks() function.

showBookForm() shows the form by setting formDiv.hidden to false.


addBook(event) needs to use "event.preventDefault()" to disable from submit.

getting "radio button value" was tricky. getElementsByName() and looping 
over the result with ".checked" did the trick.
resetForm() resets the form after the form has been validated, and data
send to create a book.