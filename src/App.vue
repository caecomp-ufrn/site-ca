<template>
  <v-app id="inspire">
    <menu-site :rotas="routes"></menu-site>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { routes } from './routes'
import Menu from './components/shared/menu/Menu'

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
