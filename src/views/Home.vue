<template>
  <div class="home">
    <Slider />
    <About />
    <MisyVis />
    <Nproductos :title="title"/>
    <hr class="container stilo">
    <Categorias />
    <Suscripcion />
  </div>
</template>

<style>
  .stilo {
    background: #6c757d58 !important;
    height: 3px;
  }
</style>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import About from '@/components/About.vue'
import MisyVis from '@/components/MisYVis.vue'
import Nproductos from '@/components/Nuestrosprod'
import Categorias from '@/components/Categorias'
import Suscripcion from '@/components/Suscripcion.vue'


export default {
  name: 'Home',
  components: {
    Slider,
    About,
    MisyVis,
    Nproductos,
    Categorias,
    Suscripcion
  },
  data(){
      return{
          title: 'Nuestros productos'
      }
  }
}
</script>
