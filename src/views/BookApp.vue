<template>
  <section class="book-container">
    <div class="toggle-details-container">
      <md-icon v-if="!isGlobalShown">
        <span @click="toggleDetails">visibility_off</span>
      </md-icon>
      <md-icon v-else><span @click="toggleDetails">visibility</span></md-icon>
    </div>
    <div class="hero">
      <h1>My Books</h1>
    </div>
    <book-filter v-if="books" @filtered="setFilter" />
    <book-list v-if="books" :books="books" @addBookToDb="addBookToDb" />
    <loader v-else />
  </section>
</template>

<script>
import BookFilter from "@/cmps/BookFilter";
import BookList from "@/cmps/BookList";
export default {
  name: "BookApp",
  data() {
    return {
      filterBy: null,
      books: null,
      isGlobalShown: false,
    };
  },
  created() {
    this.loadBooks();
    this.isGlobalShown = this.$store.getters.areDetailsShown;
  },
  methods: {
    setFilter(filterBy) {
      this.$store.commit({ type: "setBooksFilterBy", filterBy });
      this.loadBooks(filterBy);
    },
    async loadBooks(filterBy) {
      await this.$store.dispatch({ type: "loadBooks", filterBy });
      return (this.books = this.$store.getters.booksForDisplay);
    },
    async addBookToDb(bookToAdd) {
      await this.$store.dispatch({ type: "addGoogleBook", bookToAdd });
      this.loadBooks();
    },
    toggleDetails() {
      this.$store.commit({ type: "toggleDetails" });
      this.isGlobalShown = !this.isGlobalShown;
    },
  },
  components: { BookFilter, BookList },
};
</script>

