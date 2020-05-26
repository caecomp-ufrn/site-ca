<template>
  <div>
    <h2 class="centralizado">Sobre</h2>
    <v-timeline>
      <v-timeline-item v-for="n in 4" :key="n" large>
        <template v-slot:icon>
          <v-avatar>
            <img src="https://avatars1.githubusercontent.com/u/63614790?s=400&u=7e27a06b449fc0e7266283f7b6345092a62b3357&v=4" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>Chapa Em Frente</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.centralizado {
  text-align: center;
}
</style>
