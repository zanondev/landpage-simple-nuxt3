<template>
  <section id="products-section">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card align="center" class="products__card">
            <h1
              class="text-center pt-6 font-weight-light display-2 pricing__h1 products__card__h1"
            >
              Produtos
            </h1>
            <v-carousel
              justify="center"
              align="center"
              class="products__card__carousel"
            >
              <v-carousel-item
                :src="img_schedule"
                cover
              ></v-carousel-item>

              <v-carousel-item
                :src="img_pens"
                cover
              ></v-carousel-item>

              <v-carousel-item
                :src="img_note"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
     <div class="svg-border-rounded text-light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
import note from "~~/assets/img/note.jpg";
import pens from "~~/assets/img/pens.jpg";
import schedule from "~~/assets/img/schedule.jpg";



export default {
  data: () => ({
    img_note: note,
    img_pens: pens,
    img_schedule: schedule
  }),
};
</script>

<style lang="scss">
.products {
  &__card {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

    &__h1{
        color: #000721;
    }
  }
}
#products-section {
  z-index: 0;
  margin-bottom: 2em;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}
</style>