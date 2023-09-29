<template>
  <v-app id="home-section">
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
      <!-- <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      /> -->
      <div>
        <v-btn class="btn" text @click="scrollToHome">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn class="btn" text @click="scrollToAbout">
          <span class="mr-2">Sobre</span>
        </v-btn>
        <v-btn class="btn" text @click="scrollToDownload">
          <span class="mr-2">Código</span>
        </v-btn>
        <v-btn class="btn" text @click="scrollToPricing">
          <span class="mr-2">Preços</span>
        </v-btn>
        <v-btn class="btn" rounded outlined text @click="scrollToContact">
          <span class="mr-2">Contato</span>
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
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToAbout() {
      const section = document.querySelector("#about-section");

      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    },
    scrollToDownload() {
      const section = document.querySelector("#download-section");

      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    },
    scrollToHome() {
      const section = document.querySelector("#home-section");

      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    },
    scrollToPricing() {
      const section = document.querySelector("#pricing-section");

      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    },
    scrollToContact() {
      const section = document.querySelector("#contact-section");

      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    },
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

.btn {
  color: white !important;
}

.v-layout {
  height: 0 !important;
}
</style>
