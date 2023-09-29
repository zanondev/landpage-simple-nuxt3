<template>
  <navigation />
  <div class="pt-0 index-main-container">
    <home />
    <about />
    <download />
    <pricing />
    <contact />
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
import download from "~~/components/DownloadSection.vue";
import pricing from "~~/components/PricingSection.vue";
import contact from "~~/components/ContactSection.vue";

export default {
  name: "index",
  components: {
    navigation,
    home,
    about,
    download,
    pricing,
    contact,
  },
};
</script>