<template>
  <section>
    <app-header />
    <router-view />
  </section>
</template>

<script>
import AppHeader from "../src/cmps/AppHeader";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
</style>