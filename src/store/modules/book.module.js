import bookService from '../../services/bookService'
import utillsService from '../../services/utillsService'
import {
  alertCompleted
} from '../../services/alertService'
export default {
  state: {
    books: null,
    booksFilterBy: {
      title: '',
      maxPrice: null,
    },
    areDetailsShown: true,
  },
  getters: {
    booksForDisplay({
      books,
      booksFilterBy
    }) {
      const {
        title,
        maxPrice
      } = booksFilterBy
      if (!title && !maxPrice) return books
      return utillsService.filterBooks(books, booksFilterBy)
    },
    absoluteMaxPrice({
      books
    }) {
      const bookPrices = books.map((book) => book.listPrice.amount);
      return Math.max(...bookPrices);
    },
    areDetailsShown({
      areDetailsShown
    }) {
      return areDetailsShown
    }
  },
  mutations: {
    setBooks(state, {
      dbBooks
    }) {
      state.books = dbBooks
    },
    removeBook(state, {
      id
    }) {
      state.books = state.books.filter(book => book.id !== id)
    },
    addBook(state, {
      book
    }) {
      state.books.push(book)
    },
    updateBook(state, editedBooks) {
      state.books = editedBooks
    },
    setBooksFilterBy(state, {
      filterBy
    }) {
      state.booksFilterBy = filterBy
    },
    toggleDetails(state) {
      state.areDetailsShown = !state.areDetailsShown
    }
  },
  actions: {
    async loadBooks({
      commit
    }) {
      try {
        const dbBooks = await bookService.query()
        commit({
          type: 'setBooks',
          dbBooks
        })
      } catch (error) {
        console.error('action error: loadBooks failed');
      }
    },
    async removeBook({
      commit
    }, {
      id
    }) {
      try {
        await bookService.remove(id)
        commit({
          type: 'removeBook',
          id
        })
      } catch (error) {
        console.error('action error: removeBook failed');
      }
    },
    async addBook({
      commit
    }, {
      _book
    }) {
      try {
        const book = await bookService.post(_book)
        commit({
          type: 'addBook',
          book
        })
      } catch (error) {
        console.error('action error: addBook failed');
      }
    },
    async addGoogleBook({
      commit
    }, {
      bookToAdd
    }) {
      try {
        const newBook = utillsService.getEmptyBook();
        const bookToSave = utillsService.formatBookToDb(newBook, bookToAdd)
        const book = await bookService.post(bookToSave)
        commit({
          type: 'addBook',
          book
        })
        alertCompleted('Book', 'added from google books')
      } catch (error) {
        console.error('action error: addGoogleBook failed');
      }
    },
    async updateBook({
      commit
    }, {
      book
    }) {
      try {
        const editedBooks = await bookService.put(book)
        commit({
          type: 'updateBook',
          editedBooks
        })
      } catch (error) {
        console.error(error);
      }
    },
    async getBook(context, {
      id
    }) {
      return id ? await bookService.get(id) : utillsService.getEmptyBook()
    },
  }
}
