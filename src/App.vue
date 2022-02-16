<template>
  <div id="app">
    <Navbar class="container"></Navbar>
    <router-view/>
    <Botbar></Botbar>
  </div>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Inter:wght@400;700&display=swap');

  h1, h2, h4, h5, span {
    font-family: 'Barlow', sans-serif;
  }
  p, ::placeholder {
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
        height: 280px;
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
