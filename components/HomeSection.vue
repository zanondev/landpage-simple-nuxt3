<template>
  <v-parallax
    src="https://slidescorner.com/wp-content/uploads/2023/02/01-Abstract-Blue-3D-Cubes-Background-for-Tech-FREE-for-PPT-by-SlidesCorner.com_.jpg"
    height="700"
  >
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
            <v-card class="card" shaped>
              <v-img
                :src="feature.img"
                max-width="100px"
                class="d-block ml-auto mr-auto"
              ></v-img>
              <h1 class="font-weight-regular">{{ feature.title }}</h1>
              <h4 class="font-weight-regular subtitle-1">
                {{ feature.text }}
              </h4>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: "@/assets/img/logo.png",
          title: "Design Limpo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: "@/assets/img/logo.png",
          title: "Dados Seguros",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: "@/assets/img/logo.png",
          title: "Código Aberto",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-apresentation {
  margin-left: 5em;
  max-width: 20em;
  font-size: 1.5em;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
}

.card h1 {
  margin-bottom: 10px;
}
</style>
