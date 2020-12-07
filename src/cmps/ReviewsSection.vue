<template>
  <section class="reviews-section">
    <rating-section @rateBook="rateBook" />
    <div v-if="reviewPermission" class="write-review-container">
      <h5>Have you read the book? <span>Share your review!</span></h5>
      <form class="flex column align-center" @submit.prevent="addReview">
        <label for="full-name-review">Full name</label>
        <input
          type="text"
          id="full-name-review"
          v-model="newReview.fullName"
          autocomplete="off"
        />
        <label for="read-at-review">When have you read the book?</label>
        <input
          type="date"
          id="read-at-review"
          v-model="newReview.readAt"
          autocomplete="off"
          placeholder="dd-mm-yyyy"
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Write a review..."
          v-model="newReview.txt"
        ></textarea>
        <button>Save</button>
      </form>
    </div>
    <div v-else><h4 class="greeting">Thank you for your review!</h4></div>
    <div
      class="reviews-list flex align-start column"
      :v-if="bookReviews"
      v-for="(review, idx) in book.reviews"
      :key="idx"
    >
      <div class="review-preview">
        <img
          src="https://freesvg.org/img/abstract-user-flat-3.png"
          alt="user"
        />
        <p>{{ review.rating }}</p>
        <p class="review-full-name">{{ review.fullName }}</p>
        <p class="review-date">{{ review.readAt }}</p>
        <p class="review-txt">{{ review.txt }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import RatingSection from "./RatingSection";
import { alertCompleted } from "../services/alertService";
export default {
  name: "ReviewsSection",
  props: ["book"],
  components: {
    RatingSection,
  },
  data() {
    return {
      newReview: {
        fullName: "",
        readAt: "",
        txt: "",
      },
      bookReviews: null,
      reviewPermission: true,
    };
  },
  created() {
    this.bookReviews = this.book.reviews.map((review) => review);
    this.reviewPermission = true;
  },
  methods: {
    rateBook(value) {
      this.$emit("rateBook", value);
      alertCompleted("Book", "rated");
    },
    formatDate(date) {
      let newDate = date.split("-");
      return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
    },
    addReview() {
      let newReview = { ...this.newReview };
      if (!newReview.txt) return;
      if (!newReview.fullName) newReview.fullName = "Book Reader";
      if (!newReview.readAt) newReview.readAt = new Date().toLocaleDateString();
      else newReview.readAt = this.formatDate(newReview.readAt);
      this.$emit("addReview", newReview);
      this.newReview = {
        fullName: "",
        readAt: "",
        txt: "",
      };
      this.reviewPermission = false;
      alertCompleted("Review", "saved");
    },
  },
};
</script>
