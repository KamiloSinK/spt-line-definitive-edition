<template>
    <div class="cardCat">
        <b-card class="mb-5 sombra">
                <img :src="imagen" v-if="imagen != ''" :alt="nombre">
                <img :src="require('../assets/art1.jpg')" v-if="imagen == '' " :alt="id">
            <hr>
            <div class="hCard">
                {{ nombre }}
            </div>
            <b-card-text>
                <div class="expand" style="height: 3rem">
                    Categoria: {{ categoria }}
                </div>
            </b-card-text>

            <div class="d-flex flex-row justify-content-end">
                <b-button 
                @click="setProduct({
                    id: id,
                    name: nombre,
                    category: categoria,
                    image: imagen
                })"
                :to="{ path: `/products/${this.id}/${this.nombre}`, params: { id, nombre, categoria, imagen }}"
                href="#" size="sm" variant="success"
                class="text-white px-lg-5">Ver mas</b-button>
                
            </div>
        </b-card>
    </div>
</template>


<style>
    .sombra hr {
        background: #28A745;
        height: 0.1rem !important;
        
    }
    .cardCat img {
        width: 100% !important;
    }
    .expand {
        height: 5rem;
    }
</style>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Tarjetas',
    props: {
        id: String,
        nombre: String,
        categoria: String,
        imagen: String
    },

    methods:{
        ...mapMutations(['setProduct'])
    }
}
</script>