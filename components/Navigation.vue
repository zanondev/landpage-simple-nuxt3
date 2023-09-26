<template>
  <v-app>
    <v-app-bar
      :color="isScrolled ? '#000721' : 'transparent'" 
      :elevate-on-scroll="true" 
      :flat="!isScrolled" 
      dark
      class="px-15"
    >
      <v-toolbar-title>
        <img src="~~/assets/img/logo.png" class="logo" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn class="btn" text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn class="btn" text @click="$vuetify.goTo('#features')">
          <span class="mr-2">Sobre</span>
        </v-btn>
        <v-btn class="btn" text @click="$vuetify.goTo('#pricing')">
          <span class="mr-2">Preços</span>
        </v-btn>
        <v-btn class="btn" rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contate-nos</span>
        </v-btn>
      </div>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
};
</script>

<style>
.logo {
  width: 50px;
  height: 45px;
}

.v-app-bar--is-scrolled {
  background-color: #122546;
}

.btn{
  color: white!important;
}

.v-layout {
  height: 0 !important;
}
</style>