<template>
  <section class="book-edit-container">
    <div class="btn-edit-book"></div>
    <div class="book-edit-content" v-if="currBook">
      <book-preview :book="currBook"></book-preview>
      <book-edit-form
        :currBook="currBook"
        @editBook="editBook"
        @removeBook="removeBook"
      />
    </div>
    <div v-else class="book-details-container">
      <loader />
    </div>
  </section>
</template>

<script>
import BookEditForm from "@/cmps/BookEditForm";
import utillsService from "../services/utillsService";
import BookPreview from "@/cmps/BookPreview";
export default {
  name: "BookEdit",
  components: { BookEditForm, BookPreview },
  data() {
    return {
      currBook: null,
    };
  },
  async created() {
    const bookId = this.$route.params.id;
    const book = await this.$store.dispatch({ type: "getBook", id: bookId });
    this.currBook = { ...book };
  },
  methods: {
    editBook(book) {
      this.$store.dispatch({ type: "updateBook", book });
    },
    removeBook(id) {
      this.$store.dispatch({ type: "removeBook", id });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    bookPrice() {
      return utillsService.getBookPrice(this.currBook);
    },
    ratingAvg() {
      return utillsService.getRatingAvg(this.currBook);
    },
    isBookRatings() {
      if (this.currBook.ratings.length > 0) return true;
      else return false;
    },
    isOnSale() {
      return this.currBook.listPrice?.isOnSale ? true : false;
    },
    saleIcon() {
      return require("@/assets/imgs/sale-icon.png");
    },
  },
};
</script>