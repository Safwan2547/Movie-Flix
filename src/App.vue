<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './components/Home.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>

    <div class="app">
      <NavBar/>
      <RouterView></RouterView>

      

     
    </div>
  

  
</template>

<style scoped>
.app{
  width: 100vw;
  height: 100vh;
  display: flex;
}


</style>
