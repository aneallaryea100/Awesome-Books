export default class StoreLocal {
    static getPage = () => {
      let books = JSON.parse(localStorage.getItem('books')) || []
      // if (localStorage.getItem('books' === null)) {
      //   books = [];
      // } else {
      //   books = JSON.parse(localStorage.getItem('books'));
      // }
      return books;
    }

    static setLocal = (book) => {
      let varss = localStorage.setItem('books', JSON.stringify(book));
      return varss
    }

    static addPage = (book) => {
      const books = StoreLocal.getPage();

      books.push(book);

      // localStorage.setItem('books', JSON.stringify(books));
      StoreLocal.setLocal(books);
    }

    static removePage = (author) => {
      const books = StoreLocal.getPage();

      books.forEach((book, index) => {
        if (book.author === author) {
          books.splice(index, 1);
        }
      });

      // localStorage.setItem('books', JSON.stringify(books));
      StoreLocal.setLocal(books);
    }
}