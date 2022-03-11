<template>
    <div>
        <br class="h4">
            <h6 class="pt-4">{{rows}} productos en total</h6>
            <div class="">
              <b-row>
                <b-col xs="12" sm="6" md="4" v-for="producto of productos" :key="producto.id">
                  <div>
                    <Tarjetas :nombre="producto.titulo" :categoria="producto.categoria" :imagen="producto.image" :id="producto.id"/>
                  </div>
                </b-col>
              </b-row>
              
              <div class="d-flex justify-content-end overflow-auto">
                <b-button v-for="n of buttons" :key="n.id" variant="light" class="paginacion mb-4 mx-1">{{ n }}</b-button>
              </div>
            </div>
    </div>
</template>

<style scoped>

</style>

<script>
import Tarjetas from '@/components/Tarjetas.vue'

export default {
    name: 'Productpage',
     data() {
      return {
        perPage: 9,
        productos: [
          {id: '12', titulo: 'Camilo', categoria: 'Alarmas', image: 'https://picsum.photos/id/1/0/0'},
          {id: '32',titulo: 'Jose', categoria: 'Baterias', image: 'https://picsum.photos/id/2/0/0'},
          {id: '42',titulo: 'Carlos', categoria: 'Alarmas', image: 'https://picsum.photos/id/3/0/0'},
          {id: '34',titulo: 'Antonio', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/4/0/0'},
          {id: '37',titulo: 'Arlet', categoria: 'Baterias', image: 'https://picsum.photos/id/5/0/0'},
          {id: '52',titulo: 'Joan', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/6/0/0'},
          {id: '22',titulo: 'Galahad', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/7/0/0'},
          {id: '75',titulo: 'Lancelot', categoria: 'Alarmas', image: 'https://picsum.photos/id/8/0/0'},
          {id: '95',titulo: 'Luisa', categoria: 'Baterias', image: 'https://picsum.photos/id/9/0/0'},
          {id: '24',titulo: 'Mariana', categoria: 'Alarmas', image: 'https://picsum.photos/id/10/0/0'},
          {id: '30',titulo: 'Edward', categoria: 'Alarmas', image: 'https://picsum.photos/id/11/0/0'},
          {id: '13',titulo: 'Juan', categoria: 'Baterias', image: 'https://picsum.photos/id/12/0/0'},
          {id: '76',titulo: 'Maria', categoria: 'Alarmas', image: 'https://picsum.photos/id/13/0/0'},
          {id: '14',titulo: 'Alfonso', categoria: 'Alarmas', image: 'https://picsum.photos/id/14/0/0'},
          {id: '63',titulo: 'Enrique', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/15/0/0'},
          {id: '65',titulo: 'Luis', categoria: 'Baterias', image: 'https://picsum.photos/id/16/0/0'},
          {id: '83',titulo: 'Arturo', categoria: 'Baterias', image: 'https://picsum.photos/id/17/0/0'},
          {id: '48',titulo: 'Jesus', categoria: 'Alarmas', image: 'https://picsum.photos/id/18/0/0'},
          {id: '28',titulo: 'Alejandro', categoria: 'Alarmas', image: 'https://picsum.photos/id/19/0/0'},
          {id: '98',titulo: 'Michael', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/20/0/0'},
          {id: '08',titulo: 'Demiugos', categoria: 'Baterias', image: 'https://picsum.photos/id/21/0/0'}
        ]
      }
    },
    computed: {
      rows() {
        return this.productos.length
      },
      buttons() {
        return this.productos.length / 9 === Math.floor(this.productos.length / 9)
        ? Math.floor(this.productos.length / 9)
        : Math.floor(this.productos.length / 9) + 1
      }
    },
    components: {
        Tarjetas
    }
}
</script>