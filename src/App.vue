<template>
  <div class="conteudo">
    <menu-site :rotas="routes"></menu-site>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './routes'
import Menu from './components/shared/menu/Menu.vue'

export default {
  components: {
    'menu-site': Menu
  },

  data() {
    return {
      routes
    }
  }


}
</script>

<style>
.conteudo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0 auto;
}

</style>
