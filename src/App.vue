<template>
  <div id="app">
    <Navbar class="sombra"></Navbar>
    <router-view/>
    <Botbar></Botbar>
  </div>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Inter:wght@400;700&display=swap');

  h1, h2, h3, h4, h5, h6, span, .btn, label {
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
  }
  p, ::placeholder, .h7 {
    font-family: 'Inter', sans-serif;
  }
  .fuenteB {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: white;
  }
  .sombra {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  .hCard{
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;    
  }
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import Botbar from '@/components/Botbar.vue'

export default {
  components: {
    Navbar,
    Botbar
  }
}

</script>
