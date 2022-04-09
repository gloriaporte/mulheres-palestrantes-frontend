<script setup lang="ts">
import WomanCard from './components/WomanCard.vue';
import { useWomanStore } from '@/stores/women'

const store = useWomanStore()


</script>

<template>
   <main>
      <WomanCard v-for="woman in store.all" :woman="woman" />
   </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

* {
   font-family: "Open Sans", sans-serif;
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

#app {
   background-color: #f8f8f8;
}

#app > main {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 32px;
}
</style>
