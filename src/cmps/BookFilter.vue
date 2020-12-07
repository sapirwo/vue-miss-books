<template>
  <section>
    <div class="book-filter">
      <div class="main-filter">
        <img src="../assets/imgs/search-img.svg" alt="search" />
        <input
          type="text"
          @input="setFilter"
          v-model="filterBy.title"
          placeholder="Search book title..."
          ref="filterInput"
        />
      </div>
      <div class="range-value">
        <h4 @click="toggleFilterByPrice" v-if="filterByPriceMode">
          <md-icon>cancel</md-icon>
          Drag to set max price
          {{ filterBy.maxPrice && `$${filterBy.maxPrice}` }}
        </h4>
        <h4 @click="toggleFilterByPrice" v-else>
          <md-icon>add_circle</md-icon> Price filter
        </h4>
      </div>
      <div v-if="filterByPriceMode" class="filter-by-price">
        <img class="filter-by-price-icon" :src="moneyIcon" alt="money" />
        <input
          class="input-range"
          type="range"
          min="0"
          :max="maxPrice"
          v-model="filterBy.maxPrice"
          @input="setFilter"
          step="1"
        />
      </div>
    </div>
  </section>
</template>

<script>
import utillsService from "../services/utillsService";
export default {
  name: "BookFilter",
  data() {
    return {
      filterBy: {
        title: "",
        maxPrice: null,
      },
      filterByPriceMode: false,
    };
  },
  mounted() {
    if (!utillsService.IsUserOnMobileOrTablet()) this.$refs.filterInput.focus();
  },
  methods: {
    setFilter() {
      this.$emit("filtered", { ...this.filterBy });
    },
    toggleFilterByPrice() {
      this.filterByPriceMode = !this.filterByPriceMode;
      this.filterBy.maxPrice = null;
      this.setFilter();
    },
  },
  computed: {
    moneyIcon() {
      return require("@/assets/imgs/money-icon.svg");
    },
    maxPrice() {
      return this.$store.getters.absoluteMaxPrice;
    },
  },
};
</script>
