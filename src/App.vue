<script setup lang="ts">
import WomanCard from './components/WomanCard.vue';
import { useWomanStore } from '@/stores/women'

const store = useWomanStore()


</script>

<template>
   <section>
      <h2>Procurando mulheres para palestrar em seu evento?</h2>
      <h3>O Mulheres Palestrantes é uma lista de mulheres que falam sobre assuntos relacionados a programação, design, empreendedorismo e tecnologia num geral.</h3>
      <p>Hoje temos um total de {{ store.count || 0 }} mulheres cadastradas.</p>
   </section>
   <main>
      <WomanCard v-for="woman in store.all" :woman="woman" />
   </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

* {
   font-family: "Open Sans", sans-serif;
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

#app {
   background-color: #f8f8f8;

   > section {
      text-align: center;
      padding: 48px 32px;

      h2 {
         font-size: 32px;
         color: #333;
         font-weight: 400;
      }

      h3 {
         font-size: 24px;
         color: #444;
         font-weight: 700;
      }

      p {
         margin-top: 48px;
      }
   }

   > main {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 32px;
   }
}
</style>
