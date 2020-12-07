<template>
  <section>
    <div class="book-details-container" v-if="currBook">
      <div class="book-details-content">
        <book-preview :book="currBook" onClickImgRoute="edit"></book-preview>
        <book-details-lower-section :currBook="currBook" />
        <reviews-section
          :book="currBook"
          @rateBook="rateBook"
          @addReview="addReview"
        />
      </div>
    </div>
    <div v-else class="book-details-container">
      <loader />
    </div>
  </section>
</template>

<script>
import utillsService from "../services/utillsService";
import BookDetailsLowerSection from "@/cmps/BookDetailsLowerSection";
import ReviewsSection from "@/cmps/ReviewsSection";
import BookPreview from "@/cmps/BookPreview";
export default {
  name: "BookDetails",
  components: {
    BookDetailsLowerSection,
    ReviewsSection,
    BookPreview,
  },
  data() {
    return {
      currBook: null,
    };
  },
  async created() {
    const bookId = this.$route.params.id;
    const book = await this.$store.dispatch({ type: "getBook", id: bookId });
    setTimeout(() => {
      this.currBook = book;
    }, 1000);
  },
  methods: {
    async rateBook(rating) {
      let book = {
        ...this.currBook,
        ratings: [...this.currBook.ratings, rating],
      };
      await this.$store.dispatch({ type: "updateBook", book });
      this.currBook = await this.$store.dispatch({
        type: "getBook",
        id: this.currBook.id,
      });
    },
    async addReview(review) {
      let book = {
        ...this.currBook,
        reviews: [review, ...this.currBook.reviews],
      };
      await this.$store.dispatch({ type: "updateBook", book });
      this.currBook = await this.$store.dispatch({
        type: "getBook",
        id: this.currBook.id,
      });
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
