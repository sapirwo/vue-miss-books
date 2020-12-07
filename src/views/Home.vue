<template>
  <main class="home-container">
    <div class="home-content">
      <h1>Welcome to My Books</h1>
      <h2>
        Now you can easily manage all of your online books in a one special
        place!
      </h2>
      <h3><router-link to="/book">Try now!</router-link></h3>
      <router-link to="/book">
        <img
          class="hero-img"
          :src="[heroImg]"
          title="Go to my books"
          alt="Books"
        />
      </router-link>
    </div>
    <footer>
      <div>
        <small>© All rights reserved to Sapir Wolloch</small>
      </div>
    </footer>
  </main>
</template>

<script>
import utillsService from "../services/utillsService";
export default {
  name: "Home",
  computed: {
    heroImg() {
      return require("@/assets/imgs/book-hero-home00.svg");
    },
  },
};
</script>
