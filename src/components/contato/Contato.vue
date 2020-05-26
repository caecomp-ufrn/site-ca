<template>
  <div>
    <h2 class="centralizado">Contato</h2>
    <formulario />
  </div>
</template>

<script>
import Form from './Form'

export default {
  components:{
    'formulario': Form
  }
};
</script>

<style scoped>
  .centralizado {
    text-align: center;
  }
</style>
