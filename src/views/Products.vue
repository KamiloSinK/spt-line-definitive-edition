<template>
    <div class="products">
      <b-container>
        <div class="pt-4">
          <p>Ruta/Subs-ruta</p>
        </div>
        <b-row>
          <b-col md="3">
            <h4>Listado de productos</h4>
            <h6 class="pt-3">Filtre los resultados</h6>
            <hr class="sep">
              <b-form-group v-slot="{ ariaDescribedby }">
                <dl>
                  <dt class="hc" circle>Categorias</dt>
                    <dd><b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                      Accesorios para camara
                    </b-form-radio></dd>
                    <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                      <dd>Baterias</dd>
                    </b-form-radio>
                    <dd><b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="C">
                      Accesorios para el control del acceso
                    </b-form-radio></dd>
                    <dd><b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="D">
                      Alarmas
                    </b-form-radio></dd>
                </dl>
              </b-form-group>
          </b-col>

          <b-col md="9">
            <br class="h4">
            <h6 class="pt-4">{{rows}} productos en total</h6>
            <div class="">
              <b-row>
                <b-col xs="12" sm="6" md="4" v-for="producto of productos" :key="producto.id">
                  <div>
                    <Tarjetas :nombre="producto.titulo" :categoria="producto.categoria" :imagen="producto.image" />
                  </div>
                </b-col>
              </b-row>
              
              <div class="d-flex justify-content-end overflow-auto">
                <b-button v-for="n in buttons" :key="n.id" variant="light" class="paginacion mb-4 mx-1">{{ n }}</b-button>
              </div>
            </div>
            
          </b-col>
        </b-row>
      </b-container>

      <Suscripcion />
    </div>
</template>

<style>
  .sep{
    background: #6c757d58 !important;
    height: 1px;
  }
  .hc{
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }
  dd{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .paginacion {
    width: 3rem;
    color: green;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }
  .paginacion:focus{
    background: green;
  }
  .paginacion:hover{
    background: green;
    color: white;
  }
</style>

<script>

  import Suscripcion from '@/components/Suscripcion.vue'
  import Tarjetas from '@/components/Tarjetas.vue'

  export default {
    name: 'Products',
    data() {
      return {
        perPage: 9,
        productos: [
          {titulo: 'Camilo', categoria: 'Alarmas', image: 'https://picsum.photos/id/1/0/0'},
          {titulo: 'Jose', categoria: 'Baterias', image: 'https://picsum.photos/id/2/0/0'},
          {titulo: 'Gomez', categoria: 'Alarmas', image: 'https://picsum.photos/id/3/0/0'},
          {titulo: 'Gerardino', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/4/0/0'},
          {titulo: 'Arlet', categoria: 'Baterias', image: 'https://picsum.photos/id/5/0/0'},
          {titulo: 'Carolina', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/6/0/0'},
          {titulo: 'Valerio', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/7/0/0'},
          {titulo: 'Centeno', categoria: 'Alarmas', image: 'https://picsum.photos/id/8/0/0'},
          {titulo: 'Luisa', categoria: 'Baterias', image: 'https://picsum.photos/id/9/0/0'},
          {titulo: 'Mariana', categoria: 'Alarmas', image: 'https://picsum.photos/id/10/0/0'},
          {titulo: 'Edward', categoria: 'Alarmas', image: 'https://picsum.photos/id/11/0/0'},
          {titulo: 'Juan', categoria: 'Baterias', image: 'https://picsum.photos/id/12/0/0'},
          {titulo: 'Maria', categoria: 'Alarmas', image: 'https://picsum.photos/id/13/0/0'},
          {titulo: 'Alfonso', categoria: 'Alarmas', image: 'https://picsum.photos/id/14/0/0'},
          {titulo: 'Enrique', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/15/0/0'},
          {titulo: 'Luis', categoria: 'Baterias', image: 'https://picsum.photos/id/16/0/0'},
          {titulo: 'Arturo', categoria: 'Baterias', image: 'https://picsum.photos/id/17/0/0'},
          {titulo: 'Jesus', categoria: 'Alarmas', image: 'https://picsum.photos/id/18/0/0'},
          {titulo: 'Alejandro', categoria: 'Alarmas', image: 'https://picsum.photos/id/19/0/0'},
          {titulo: 'Michael', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/20/0/0'},
          {titulo: 'Demiugos', categoria: 'Baterias', image: 'https://picsum.photos/id/21/0/0'}
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
      Suscripcion,
      Tarjetas
    }
  }
</script>