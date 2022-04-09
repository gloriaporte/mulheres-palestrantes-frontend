<script setup lang="ts">
import { useWomanStore } from '@/stores/women'
const womanStore = useWomanStore()

defineProps<{
   woman: (typeof womanStore.all[0])
}>()

function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
   return o[propertyName]; // o[propertyName] is of type T[K]
}

</script>

<template>
   <div class="WomanCard">
      <header>
         <img :src="woman.icon" :alt="woman.name" />
         <h3 v-text="woman.name"></h3>
      </header>
      <main>
         <span v-for="tag in woman.tags">{{ tag }}</span>
      </main>
      <footer>
         <p>{{ woman.location }}</p>
         <div>
            <a
               v-for="site in Object.keys(woman.links)"
               :href="getProperty(woman.links, site as any)"
               :class="[site]"
               target="_blank"
               rel="noopener noreferrer"
            >
               <font-awesome-icon :icon="['fab', site]" v-if="site == 'linkedin'" />
               <font-awesome-icon
                  :icon="['fas', 'square-arrow-up-right']"
                  v-else-if="site == 'other'"
               />
               <font-awesome-icon :icon="['fab', site + '-square']" v-else />
            </a>
         </div>
      </footer>
   </div>
</template>



<style scoped lang="scss">
div.WomanCard {
   background: #fff;
   padding: 1.5rem 1rem;
   width: 270px;
   height: 370px;
   text-align: center;
   box-shadow: 0 0 10px rgb(0 0 0 / 10%);
   transition: 0.3s all;
   border-radius: 0.3rem;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   animation: 2s power-scale-even infinite alternate;

   &:hover {
      border-radius: 100px 100px 0.3rem 0.3rem;
      animation: none !important;
      background: #ffdfef;
      color: #cc0066;

      header img {
         transform: scale(1.3) translateY(-15px);
         box-shadow: 0 0 20px 3px #edb515;
      }

      main span {
         background: #cc0066;
         color: #fff;
      }
   }
}

header {
   img {
      border-radius: 100%;
      transition: 0.5s all;
   }
}

main {
   max-height: 120px;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;

   overflow-y: scroll;

   margin: 8px 0;
   padding: 8px 0;

   span {
      transition: 0.3s all;

      background-color: #eee;
      border-radius: 4px;
      color: #444;
      padding: 0.2rem 0.5rem;
      margin: 0.2rem;
      font-size: 0.8rem;
   }

   &::-webkit-scrollbar {
      width: 5px;
   }

   &::-webkit-scrollbar-track {
      background: #ebdce1;
      border-left: 0 solid #fff;
      border-right: 5px solid #fff;
   }

   &::-webkit-scrollbar-thumb {
      background: #cc0066;
      border-left: 0 solid #fff;
      border-right: 5px solid transparent;
   }
}

footer {
   border-top: 4px solid #edb515;
   background: #fff;

   p {
      color: #666;
      margin-top: 4px;
      // margin-bottom: 12px;
   }

   a {
      display: inline-block;
      margin: 0 4px;
      text-decoration: none;
      color: #333333;
      font-size: 32px;
      transition: 0.3s all;
      margin-top: 2px;

      svg {
         transition: color 0.3s, filter 0.3s;
      }

      &:hover {
         font-size: 40px;
         margin-top: -8px;

         .fa-facebook-square {
            color: #3b5998;
            filter: drop-shadow(0px 2px 10px rgb(59 89 152));
         }

         .fa-twitter-square {
            color: #006dbf;
            filter: drop-shadow(0px 2px 10px rgb(0 109 191));
         }

         .fa-github-square {
            color: #732a82;
            filter: drop-shadow(0px 2px 10px rgb(115 42 130));
         }

         .fa-behance-square {
            color: #0057ff;
            filter: drop-shadow(0px 2px 10px rgb(0 87 255));
         }

         .fa-linkedin {
            color: #0076b5;
            filter: drop-shadow(0px 2px 10px rgb(0 118 181));
         }

         .fa-square-arrow-up-right {
            color: #cc0066;

            // filter: drop-shadow(0px 2px 10px rgb(204 0 102));
         }
      }
   }
}

@keyframes power-scale-even {
   0% {
      transform: scale(1.05);
   }
   100% {
      transform: scale(1);
   }
}
</style>