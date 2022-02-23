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
            <div class="overflow-auto">
              <b-row>
                <b-col xs="12" sm="6" md="4" v-for="(item, index) of items" :key="item.id">
                  <Tarjetas />
                </b-col>
              </b-row>
              
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                class="d-flex justify-content-end"
              ></b-pagination>
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
</style>

<script>

  import Suscripcion from '@/components/Suscripcion.vue'
  import Tarjetas from '@/components/Tarjetas.vue'

  export default {
    name: 'Products',
    data() {
      return {
        perPage: 9,
        currentPage: 1,
        items: [
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'},
          {nombre: 'Camilo'}
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    components: {
      Suscripcion,
      Tarjetas
    }
  }
</script>