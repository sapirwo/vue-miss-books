<template>
  <section class="book-list-container card-grid">
    <div class="book-preview-container">
      <div class="add-book-container">
        <book-add
          v-if="addBookMode"
          @closeAddingBook="addBookToggle"
          @addBookToDb="_addBookToDb"
        />
        <div v-else @click="addBookToggle">
          <p>Add From Google</p>
          <img class="google-icon" :src="googleIcon" alt="google" />
          <button>+</button>
        </div>
      </div>
    </div>
    <div v-for="book in books" :key="book.id">
      <book-preview :book="book" />
    </div>
  </section>
</template>

<script>
import BookPreview from "./BookPreview";
import BookAdd from "./BookAdd";
export default {
  name: "BookList",
  props: ["books", "addBookToDb"],
  data() {
    return {
      addBookMode: false,
    };
  },
  components: {
    BookPreview,
    BookAdd,
  },
  methods: {
    addBookToggle() {
      this.addBookMode = !this.addBookMode;
    },
    _addBookToDb(bookToAdd) {
      this.$emit("addBookToDb", bookToAdd);
    },
  },
  computed: {
    googleIcon() {
      return require("../assets/imgs/google-icon.svg");
    },
  },
};
</script>

