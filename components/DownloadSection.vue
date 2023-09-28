<template>
  <section id="download-section">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                :src="img_zoom"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="text-white text-left">
              <h1 class="font-weight-light display-2 mb-2">
                Baixar Demonstração
              </h1>
              <h2 class="font-weight-light" > 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex
                animi quod laboriosam vel blanditiis labore alias, aliquid,
                tempora repellendus non.
              </h2>
              <v-btn
                rounded
                href="https://github.com/zanondev/landpage-simple-nuxt3"
                class="mt-4 download-btn"
              >
                GIT HUB
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download-section {
  background-image: url("~~/assets/img/commerce.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

h1 {
  font-size: xx-large;
}

.download-btn {
  border-color: white;
  border-width: 1px;
  color: white !important;
  background-color: transparent !important;
  box-shadow: none !important;
}

#download-section .container,
#download-section .row {
  height: 100%;
}

.v-container{
    margin-top: 2em;
    padding-top: 5em;
}
</style>

<script>
import zoom from "~~/assets/img/zoom.png";

export default {
  data() {
    return {
      img_zoom: zoom,
    };
  },
};
</script>