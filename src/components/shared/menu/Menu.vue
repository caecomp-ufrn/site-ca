<template>

    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">CAECOMP</h1>
      </v-card-title>

      <v-tabs
        v-model="tab"
        background-color="transparent"
        dark
        grow
      >
        <v-tab
          v-for="item in rotas"
          :key="item.titulo"
          :to="item.path ? item.path : '/'"
        >
          {{ item.titulo }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in rotas"
          :key="item.titulo"
        >
          <v-card
            color="basil"
            flat
          >
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

</template>

<script>

export default {
  props: {
      rotas: {
          type: Array,
          required: true
      }
  },

   data () {
    return {
      tab: null,
      items: [
        'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },

};

</script>

<style scoped>

 .basil {
background-color: #1867C0 !important;
}
.basil--text {
color: #ffffff !important;
}
</style>
