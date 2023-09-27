<template>
  <section>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-thin display-2">Sobre</h1>
              <h1 class="font-weight-thin display-1 mb-3">
                Lorem ipsum dolor!
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    :src="img_rocket"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify about-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    :src="img_webchat"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify about-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    :src="img_handshake"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify about-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                :src="img_team"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import handshake_svg from "~~/assets/img/handshake.svg";
import rocket_svg from "~~/assets/img/rocket-launch.svg";
import webchat_svg from "~~/assets/img/wechat.svg";
import team_png from "~~/assets/img/team.png";

export default {
  data() {
    return {
      img_team: team_png,
      img_rocket: rocket_svg,
      img_handshake: handshake_svg,
      img_webchat: webchat_svg
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: xx-large;
}

.about-text {
  max-width: 30em;
}
</style>
