<template>
  <v-app id="inspire">
    <menu-site :rotas="routes" />
    <v-content>
       <v-container fluid>
      <router-view></router-view>
    </v-container>
    </v-content>
    <rodape-site />
  </v-app>
</template>

<script>
import { routes } from './routes'
import Menu from './components/shared/menu/Menu'
import Rodape from './components/shared/footer/Footer'

export default {
  components: {
    'menu-site': Menu,
    'rodape-site': Rodape,
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
