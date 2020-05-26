<template>
 <v-card
      class="mx-auto"
      max-width="600"
      max-height="800"
    >
  <form class="formulario">
      <v-text-field
        v-model="name"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>

      <v-textarea
      clearable
      clear-icon="x"
      label="Assunto..."

    ></v-textarea>
      <div class="my-2">
        <v-btn large color="primary" @click="submit">Enviar</v-btn>
      </div>

    </form>
 </v-card>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    select: null,
    checkbox: false,
  }),
   methods: {
    submit () {
      console.log("Enviou")
    },

  },
}
</script>


<style scoped>
  .formulario {
    margin: 25px;
    padding-bottom: 20px;
  }
</style>
