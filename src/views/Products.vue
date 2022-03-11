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
                    <dd><b-form-radio :aria-describedby="ariaDescribedby" name="some-radios" value="A">
                      Accesorios para camara
                    </b-form-radio></dd>
                    <b-form-radio :aria-describedby="ariaDescribedby" name="some-radios" value="B">
                      <dd>Baterias</dd>
                    </b-form-radio>
                    <dd><b-form-radio :aria-describedby="ariaDescribedby" name="some-radios" value="C">
                      Accesorios para el control del acceso
                    </b-form-radio></dd>
                    <dd><b-form-radio :aria-describedby="ariaDescribedby" name="some-radios" value="D">
                      Alarmas
                    </b-form-radio></dd>
                </dl>
              </b-form-group>
          </b-col>

          <b-col md="9">
            
            <Productpage />
            
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
  import Productpage from '@/components/Productpage.vue'

  export default {
    name: 'Products',
    data(){
      return{
      
      }
    },
    components: {
      Suscripcion,
      Productpage
    }
  }
</script>