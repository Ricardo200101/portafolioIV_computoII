<template>
   
  <div id="app" class="container"> 
    <img alt="Vue Logo" src="@/assets/logougb.png " style="width: 150px; height: auto;">
    <MiIntro></MiIntro>
  <MiContenido></MiContenido>
  <MiHome></MiHome>
  </div>
 
</template>

<script>
import MiIntro from './components/MiIntro.vue'
import MiContenido from './components/MiContenido.vue'
import MiHome from './components/MiHome.vue'





export default {
  name: 'App',
  components: {
    MiIntro, 
    MiContenido, 
    MiHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
