<template>
  <section>
    <div class="add-book-back-side">
      <button @click="closeAddingBook" class="btn-close-adding-mode">X</button>
      <h1>Google Books</h1>
      <img class="google-icon" :src="googleIcon" alt="google" />
      <div class="search-google-book-section">
        <input
          id="input-add-title"
          type="text"
          placeholder="Enter title..."
          autocomplete="off"
          @input="getBooks"
        />
        <div v-if="bookTitles" class="google-books-autocomplete">
          <p @click="_addBookToDb(0)">{{ bookTitles[0] }}</p>
          <p @click="_addBookToDb(1)">{{ bookTitles[1] }}</p>
          <p @click="_addBookToDb(2)">{{ bookTitles[2] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import googleBooksService from "../services/googleBooksService";
import bookService from "../services/bookService";
export default {
  name: "BookAdd",
  props: ["addBookToDb"],
  data() {
    return {
      booksFromApi: null,
      bookTitles: null,
    };
  },
  methods: {
    closeAddingBook() {
      this.$emit("closeAddingBook");
    },
    getBooks({ target }) {
      if (!target.value) return (this.bookTitles = null);
      this.getBooksFromGoogle(target.value);
    },
    async getBooksFromGoogle(userQuery) {
      if (!userQuery) return;
      this.booksFromApi = await googleBooksService.query(userQuery);
      this.bookTitles = this.booksFromApi.map((item) => item.volumeInfo.title);
    },
    _addBookToDb(idx) {
      const bookToAdd = this.booksFromApi[idx].volumeInfo;
      this.$emit("addBookToDb", bookToAdd);
    },
  },
  computed: {
    googleIcon() {
      return require("../assets/imgs/google-icon.svg");
    },
    bookTitleForDisplay() {
      return this.bookTitles;
    },
  },
};
</script>

