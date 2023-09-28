<template>
  <section id="pricing-section" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card style="width: 100%" class="pricing">
            <h1
              class="text-center pt-6 font-weight-light display-2 pricing__h1"
            >
              Planos
            </h1>
            <v-divider class="my-6"></v-divider>
            <v-row class="text-center">
              <v-col class="col-12 col-sm-6 col-md-4">
                <div class="flex-center">
                  <v-card-text class="pricing__card-text">
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img :src="img_airbaloon" />
                        </div>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">
                      Básico
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Domínios personalizados
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Limite de 1000 acessos diários
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Outras características...
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase text-h4 mt-6 blue--text">
                      R$ 100,00
                    </div>
                    <v-btn
                      v-bind="size"
                      rounded
                      outlined
                      class="mt-6 pricing__btn"
                    >
                      COMEÇE AGORA!
                    </v-btn>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical></v-divider>
                </div>
                <v-divider class="mx-4"></v-divider>
              </v-col>
              <v-col class="col-12 col-sm-6 col-md-4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img :src="img_airplane" />
                        </div>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">
                      Padrão
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Domínios personalizados
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Limite de 10000 acessos diários
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Outras características...
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase text-h4 mt-6 blue--text">
                      R$ 100,00
                    </div>
                    <v-btn v-bind="size" rounded class="mt-6 pricing__btn">
                      COMEÇE AGORA!
                    </v-btn>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical></v-divider>
                </div>
                <v-divider class="mx-4"></v-divider>
              </v-col>
              <v-col class="col-12 col-sm-6 col-md-4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img :src="img_rocket" />
                        </div>
                      </div>
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2">
                      EMPRESARIAL
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Domínios personalizados
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Acessos ilimitados
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase blue--text">
                      Outras características...
                    </div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase text-h4 mt-6 blue--text">
                      R$ 500,00
                    </div>
                    <v-btn v-bind="size" rounded class="mt-6 pricing__btn">
                      COMEÇE AGORA!
                    </v-btn>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical></v-divider>
                </div>
                <v-divider class="mx-4"></v-divider>
              </v-col>
            </v-row>
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


<style lang="scss">
.pricing {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  &__h1 {
    font-size: 50px;
    color: #000721;
  }

  &__card-text {
    color: #000721;
  }

  &__btn {
    border-color: #000721;
    border-width: 1px;
    color: #000721;
    background-color: transparent;
    box-shadow: none;
  }
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing-section {
  z-index: 0;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>

<script>
import airballoon from "~~/assets/img/airballoon.svg";
import airplane from "~~/assets/img/airplane.svg";
import rocket from "~~/assets/img/rocket.svg";

export default {
  data: () => ({
    img_airbaloon: airballoon,
    img_airplane: airplane,
    img_rocket: rocket,
  }),
};
</script>