<template>
    <div class="container">
        <div class="pt-4">
          <p>Ruta/Subs-ruta</p>
        </div>
        <b-row class="mb-5">
            <b-col cols="12" md="6">
                <div class="greenBot">
                    <b-img :src="product.image" fluid alt="Responsive image"></b-img>
                </div>
                
                    <b-row class="mt-4">
                        <b-col>
                            <b-img right :src="product.image" fluid alt="Responsive image"></b-img>
                        </b-col>
                        <b-col>
                            <b-img right :src="product.image" fluid alt="Responsive image"></b-img>
                        </b-col>
                        <b-col>
                            <b-img right :src="product.image" fluid alt="Responsive image"></b-img>
                        </b-col>
                        <b-col>
                            <b-img right :src="product.image" fluid alt="Responsive image"></b-img>
                        </b-col>
                    </b-row>
                
            </b-col>
            <b-col cols="12" md="6">
                <div class="py-5 desc">
                    <h6>Nombre del producto</h6>
                    <h3>{{ product.name }}</h3>
                    <hr class="d-flex">
                    <h6 class="mt-4">Descripcion</h6>
                    <p>Descripcion del producto</p>
                    <h6>SKU</h6>
                    <p>A7843</p>
                    <h6>Categoria</h6>
                    <p>{{ product.category }}</p>
                    <b-button size="lg" variant="success" block to="/contacto">Contactar</b-button>
                </div>
            </b-col>
        </b-row>
        <hr>
        <Nproductos :title="title"/>
    </div>
</template>
<style scoped>
    .greenBot{
        border-bottom: 1em solid #28A745;
    }
    .desc > p {
        font-size: 0.75em;
    }
    .desc > hr {
        background: #28A745;
        height: 0.2em;
        width: 9em;
        margin-top: -0.2em;
        position: absolute;
        left: 1em;
    }
    .hover > img:before {
	position: absolute;
    top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.6);
}
</style>
<script>
import Nproductos from '@/components/Nuestrosprod'

import {mapState} from 'vuex'
export default ({
    name: 'Productdetails',
    components: {
        Nproductos
    },
    computed: {
        product () {
        return this.$store.state.product
        }

    },
    data(){
        return{
            title: 'Productos sugeridos'
        }
    }
})
</script>
