<template>
  <div>
    <h2 class="centralizado">Notícias</h2>
    <carrosel-noticias></carrosel-noticias>
  </div>
</template>

<script>
import Carrosel from './Carrosel'

export default {
  components: {
    'carrosel-noticias': Carrosel
  }
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}
</style>
