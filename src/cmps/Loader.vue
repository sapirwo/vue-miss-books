<template>
  <img class="loading-spinner" src="@/assets/imgs/loading.svg" alt="loading" />
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
img.loading-spinner {
  width: 50%;
  max-width: 200px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>