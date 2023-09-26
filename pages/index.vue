<template>
  <navigation />
      <home />
</template>

<script>
import navigation from "~~/components/Navigation.vue";
import home from "~~/components/HomeSection.vue";

export default {
  name: "index",
  components: {
    navigation,
    home
  },
};
</script>

<style scoped lang="scss">
 ::v-deep .v-application--wrap {
 min-height: fit-content!important;
  }
</style>