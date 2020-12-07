<template>
  <section class="book-preview-container" v-if="book">
    <img v-if="isOnSale" class="sale-icon" :src="saleIcon" alt="on sale" />
    <md-icon
      v-if="
        (areDetailsShown && isGlobalShown) ||
        (!areDetailsShown && !isGlobalShown)
      "
      ><span @click.stop="onShowDetails">visibility_off</span></md-icon
    >
    <md-icon v-else
      ><span @click.stop="onShowDetails">visibility</span></md-icon
    >
    <router-link :to="imgRoute">
      <img :class="bookImgStyle" :src="book.thumbnail" alt="book" />
    </router-link>
    <div class="book-prev-lower-sec flex column">
      <h2>{{ bookPrice }}</h2>
      <p class="rating-section" v-if="isBookRatings">
        <span v-for="n in ratingAvg" :key="n">⭐</span>
      </p>
      <h2>{{ book.title }}</h2>
    </div>
  </section>
</template>

<script>
import utillsService from "../services/utillsService";
export default {
  name: "BookPreview",
  props: ["book", "onClickImgRoute"],
  data() {
    return {
      areDetailsShown: false,
      isGlobalShown: false,
    };
  },
  methods: {
    onShowDetails() {
      this.areDetailsShown = !this.areDetailsShown;
    },
  },
  computed: {
    bookPrice() {
      return utillsService.getBookPrice(this.book);
    },
    ratingAvg() {
      return utillsService.getRatingAvg(this.book);
    },
    saleIcon() {
      return require("@/assets/imgs/sale-icon.png");
    },
    isOnSale() {
      return this.book.listPrice.isOnSale ? true : false;
    },
    isBookRatings() {
      if (this.book.ratings.length > 0) return true;
      else return false;
    },
    imgRoute() {
      return this.onClickImgRoute === "edit"
        ? `/book/edit/${this.book.id}`
        : `/book/${this.book.id}`;
    },
    bookImgStyle() {
      const isGlobalShown = this.$store.getters.areDetailsShown;
      if (
        (!isGlobalShown && this.isGlobalShown) ||
        (isGlobalShown && !this.isGlobalShown)
      ) {
        this.areDetailsShown = false;
      }
      this.isGlobalShown = isGlobalShown;
      return `book-img ${
        (this.areDetailsShown && isGlobalShown) ||
        (!this.areDetailsShown && !isGlobalShown)
          ? " details-are-shown"
          : ""
      }`;
    },
  },
};
</script>

