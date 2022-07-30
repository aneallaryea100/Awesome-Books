export default class StoreLocal {
    static getPage = () => {
      const books = JSON.parse(localStorage.getItem('books')) || [];
      return books;
    }

    static setLocal = (book) => {
      const varss = localStorage.setItem('books', JSON.stringify(book));
      return varss;
    }

    static addPage = (book) => {
      const books = StoreLocal.getPage();
      books.push(book);
      StoreLocal.setLocal(books);
    }

    static removePage = (author) => {
      const books = StoreLocal.getPage();
      books.forEach((book, index) => {
        if (book.author === author) {
          books.splice(index, 1);
        }
      });
      StoreLocal.setLocal(books);
    }
}