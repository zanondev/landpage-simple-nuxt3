<template>
  <section class="pb-0" id="contact-section">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h1 class="font-weight-light display-1">Entre em contato</h1>
              <h3 class="font-weight-light mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                explicabo commodi quisquam asperiores dolore ad enim provident
                veniam perferendis voluptate, perspiciatis.
              </h3>
              <h3 class="font-weight-light mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h3>
              <h3 class="font-weight-light mt-3">
                Telefone: +xx (xx) xxxxx-xxxx
              </h3>
              <h3 class="font-weight-light">Email: email@email.com</h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nome"
                  required
                  bg-color="transparent"
                  color="#000721"
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  bg-color="transparent"
                  color="#000721"
                ></v-text-field>

                <v-textarea
                  v-model="textArea"
                  :rules="textAreaRules"
                  label="Mensagem"
                  required
                  bg-color="transparent"
                  color="#000721"
                />

                <v-btn
                  :disabled="!valid"
                  color="#000721"
                  :dark="valid"
                  rounded
                  block
                  class="mt-3"
                  @click="submit"
                >
                  Enviar
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss">
#contact-section {
  background-color: #f4f7f5;
  margin-bottom: 2em;
}
h1 {
  font-size: 30px;
}
</style>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "O campo nome é obrigatório",
      (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O campo email é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "O campo de texto é obrigatório",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
  }),
  methods: {
    submit() {
      // logic
    },
  },
};
</script>
