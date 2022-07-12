export default class StoreLocal {
    static getPage = () => {
      let books;
      if (localStorage.getItem('books' === null)) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }

      return books;
    }

    static addPage = (book) => {
      const books = StoreLocal.getPage();

      books.push(book);

      localStorage.setItem('books', JSON.stringify(books));
    }

    static removePage = (author) => {
      const books = StoreLocal.getPage();

      books.forEach((book, index) => {
        if (book.author === author) {
          books.splice(index, 1);
        }
      });

      localStorage.setItem('books', JSON.stringify(books));
    }
}