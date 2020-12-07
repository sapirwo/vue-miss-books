<template>
  <section class="main-header-container">
    <div class="main-header-content flex space-between">
      <div class="left-section">
        <router-link to="/book"
          ><img :src="logoImg" alt="logo" class="logo" />
        </router-link>
      </div>
      <div class="right-section">
        <router-link to="/">Home</router-link>
        <router-link to="/book">Books</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    logoImg() {
      return require("@/assets/imgs/books-logo.png");
    },
  },
};
</script>
