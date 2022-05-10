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

---------------------------------
New book button:
When new book button is clicked from is shows and new book button gets
hidden. From Close button closes the form and displayes the New Book
button.
Logic is simple at ShowAddBookForm() function.

---------------------------------
Add book notification message:
Had to create a empty <p>. Filled it with
notification message through js. Close From button removes the message.
Notifican message stays until close form button is pressed as I did not 
yet learn to make it disapper after certain time (Though I could just google it. Let's see if it is in the later lessons.)

----------------------------------
Remove book icon on book cards:
Hovering over the book cards shows the book remove icon.
Used absolute position to position the icon there. Cards need to have 
position relative for this. It was tricky to display the icon only when hovered over the card. Found soulution on the web.
.book-card:hover .close-icon {
    display:block;
}
Remove icon's css was easy.

----------------------------------
Make remove book icon to remove book:
Set data attribute of 'cross icon' through js.
First bookIndex=0 is defined at global.
showBooks() function gives 'cross icon' dataset as books' index.
crossIcon.dataset.index = bookIndex;
    bookIndex += 1;

Reset bookIndex=0 at displayBooks() because after adding a book, all the
books are removed from dom and get placed again on the dom.

Clicking 'cross icon' removes book:
Done with removeBook() function.
After removing form myLibrary array dom needs to get updated with displayBooks().
displayBooks() calls removeBook() function to update 'close icon's' nodelist.

