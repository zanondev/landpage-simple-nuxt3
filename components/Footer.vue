<template>
  <v-layout>
    <v-footer id="footer-section">
      <container class="footer__container">
        <v-card
          flat
          tile
          class="secondary text-white text-center footer__card"
        >
          <v-card-text>
            <v-btn
              v-for="(icon, i) in icons"
              :key="i"
              class="mx-4 text-white"
              :href="icon.link"
              target="_blank"
              icon
            >
              <v-icon size="24px">{{ icon.text }}</v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
            Mauris cursus commodo interdum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Zanon Dev</strong>
          </v-card-text>
        </v-card>
      </container>
    </v-footer>
  </v-layout>
</template>

<style lang="scss">
#footer-section {
  padding: 0;
}

.footer {
  &__container {
    width: 100%;
  }
  &__card {
    border-radius: 0;
    background-color: #000721;
  }
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "",
      },
      {
        text: "mdi-linkedin",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "https://instagram.com/joabson_arley/",
      },
    ],
  }),
};
</script>
