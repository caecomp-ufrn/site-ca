<template>
  <nav>
    <ul class="lista-menu">
      <li v-for="rota in rotas" class="lista-menu-item">
        <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }} | </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: {
      rotas: {
          type: Array,
          required: true
      }
  }
};

</script>

<style scoped>
  .lista-menu{
    list-style: none;
  }

  .lista-menu, .lista-menu-item {
    display: inline-block;
  }
</style>
