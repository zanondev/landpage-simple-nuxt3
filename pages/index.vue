<template>
  <navigation />
  <div class="pt-0 index-main-container">
    <home />
    <about />
  </div>
</template>

<style scoped>
.index-main-container {
  background-image: url("~~/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import navigation from "~~/components/Navigation.vue";
import home from "~~/components/HomeSection.vue";
import about from "~~/components/AboutSection.vue";

export default {
  name: "index",
  components: {
    navigation,
    home,
    about,
  },
};
</script>