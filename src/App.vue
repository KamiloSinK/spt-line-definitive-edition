<template>
  <div id="app">
    <Navbar class="container" />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}

</script>
