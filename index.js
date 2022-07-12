import Books from './modules/classbooks.js';
import Page from './modules/classdisplay.js';
import StoreLocal from './modules/classstore.js';
import { DateTime } from './modules/luxon.js';

// Declare variables
const sections = document.querySelectorAll('section');
const arrSections = Array.from(sections);

const links = document.querySelectorAll('.nav-a');
const arrLinks = Array.from(links);

// display date and time
const dateTime = DateTime.now()
const timess = dateTime.toLocaleString(DateTime.DATETIME_MED);
document.querySelector('.date').innerHTML = timess;

//event to display book
document.addEventListener('DOMContentLoaded', Page.displayPage);

//event to add book to page
document.querySelector("#addBtn").addEventListener("click", (e) => {
  e.preventDefault();

  //get form values
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#bookAuthor").value;
 
  // instantiate books
  const book = new Books(title, author);

  //add book to page
  Page.addBookToPage(book);
  Page.changeContent(0);

  //add to storage
  StoreLocal.addPage(book);

  //clear input fields
  Page.clearFields();
});

//ADD EVENT LISTENER TO EACH ARRLINKS//
arrLinks.forEach((link, i) =>{
  link.addEventListener('click', () => {
    Page.changeContent(i);
  });
})

//event to remove book from page
document.querySelector("#booksUl").addEventListener("click", (e) => {

  //remove book from page
 Page.deleteBookFromPage(e.target);
 
 //remove book from store
 StoreLocal.removePage(e.target.previousElementSibling.childNodes[2].textContent);
});
