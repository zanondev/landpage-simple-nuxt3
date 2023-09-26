<template>
  <v-parallax :src="img_home" height="700">
    <div
      class="text-apresentation d-flex flex-column fill-height justify-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">Sua empresa</h1>
      <h4 class="subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores porro
        voluptatibus delectus nam optio harum!
      </h4>
    </div>
  </v-parallax>
  <v-container fluid id="features" class="mt-2">
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-row align="center" justify="space-around">
          <!-- <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </v-col> -->
          <v-col
            cols="12"
            sm="4"
            class="text-center"
            v-for="(feature, i) in features"
            :key="i"
          >
            <v-hover v-slot="{ isHovering, props }" close-delay="200">
              <v-card
                class="card"
                shaped
                :elevation="isHovering ? 16 : 2"
                :class="{ 'up': isHovering }"
                v-bind="props"
              >
                <v-img
                  :src="feature.img"
                  max-width="100px"
                  class="d-block ml-auto mr-auto"
                  style="color: red"
                ></v-img>
                <h1 class="font-weight-regular">{{ feature.title }}</h1>
                <h4 class="font-weight-regular subtitle-1">
                  {{ feature.text }}
                </h4>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import code_svg from "~~/assets/img/code.svg";
import monitor_svg from "~~/assets/img/monitor.svg";
import security_svg from "~~/assets/img/security.svg";
import home_jpg from "~~/assets/img/home.jpg";

export default {
  data() {
    return {
      img_home: home_jpg,
      features: [
        {
          img: monitor_svg,
          title: "Design Limpo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: security_svg,
          title: "Dados Seguros",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: code_svg,
          title: "Código Aberto",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
};
</script>

<style>
.text-apresentation {
  margin-left: 5em;
  max-width: 20em;
  font-size: 1.5em;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.card h1 {
  margin-bottom: 10px;
}

.up {
  transform: translateY(-10px);
  transition: 0.5s ease-out;
}
</style>
