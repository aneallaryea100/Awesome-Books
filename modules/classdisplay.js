import StoreLocal from './classstore.js';

// Declare variables
const sections = document.querySelectorAll('section');
const arrSections = Array.from(sections);

const links = document.querySelectorAll('.nav-a');
export default class Page {
    static displayPage = () => {
      const books = StoreLocal.getPage();
      books.forEach((book) => Page.addBookToPage(book));
    }

    static addBookToPage = (book) => {
      const list = document.getElementById('booksUl');
      const li = document.createElement('li');
      li.setAttribute('class', 'booklii');
      const pAuthor = document.createElement('p');
      const titles = document.createElement('span');
      titles.setAttribute('class', 'title');
      titles.textContent = ` ${book.title}`;
      const bySpan = document.createElement('span');
      bySpan.textContent = '  by  ';
      const authorTitle = document.createElement('span');
      authorTitle.setAttribute('class', 't-author');
      authorTitle.textContent = `${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.setAttribute('id', 'delete');
      removeBtn.setAttribute('class', 'delete');
      pAuthor.appendChild(titles);
      pAuthor.appendChild(bySpan);
      pAuthor.appendChild(authorTitle);
      li.appendChild(pAuthor);
      li.appendChild(removeBtn);
      list.appendChild(li);
    }

    // delete book from page
    static deleteBookFromPage = (el) => {
      if (el.classList.contains('delete')) {
        el.parentElement.remove();
      }
    }

    // clear fields
    static clearFields = () => {
      document.querySelector('#bookTitle').value = '';
      document.querySelector('#bookAuthor').value = '';
    }

    // CHANGE CONTENT DYNAMICALLY
    static changeContent = (index) => {
      for (let i = 0; i < arrSections.length; i += 1) {
        if (index === i) {
          sections[i].classList.remove('hide');
          links[i].style.color = 'gold';
        } if (index !== i) {
          sections[i].classList.add('hide');
          links[i].style.color = 'aliceblue';
        }
      }
    }
}