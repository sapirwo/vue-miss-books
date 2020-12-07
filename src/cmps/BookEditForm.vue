<template>
  <section>
    <div class="book-edit-form-container">
      <form class="flex column" v-if="book">
        <label for="book-edit-form-title">Title</label>
        <input
          id="book-edit-form-title"
          type="text"
          v-model="book.title"
          autocomplete="off"
        />
        <label for="book-edit-form-date">Publish date</label>
        <input
          id="book-edit-form-date"
          type="year"
          min="1800"
          max="year"
          v-model="book.publishedDate"
          autocomplete="off"
        />
        <label for="book-edit-form-price">Price</label>
        <input
          id="book-edit-form-price"
          type="number"
          min="0"
          max="9999"
          v-model="book.listPrice.amount"
          autocomplete="off"
        />
        <label for="book-edit-form-desc">Description</label>
        <textarea
          id="book-edit-form-desc"
          type="text"
          v-model="book.description"
        />
        <div class="flex"></div>
      </form>
      <div class="btns-section flex">
        <button @click="editBook">Save</button>
        <button @click="removeBook">Delete</button>
        <button @click="goBack">Back</button>
      </div>
    </div>
  </section>
</template>

<script>
import { alertRemove, alertCompleted } from "../services/alertService";
export default {
  name: "BookEditForm",
  props: ["currBook"],
  data() {
    return {
      book: null,
    };
  },
  created() {
    this.book = { ...this.currBook };
  },

  methods: {
    async editBook() {
      this.$emit("editBook", this.book);
      alertCompleted("Book", "saved");
    },
    async removeBook() {
      try {
        await alertRemove("book");
        this.$emit("removeBook", this.book.id);
        this.book = null;
        this.$router.push("/book");
      } catch (err) {
        console.log(err);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
