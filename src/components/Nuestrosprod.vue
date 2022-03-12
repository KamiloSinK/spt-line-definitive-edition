<template>
    <div>
        <b-container class="pt-5">
            <b-row class="pb-md-3">
                <div class="container d-flex justify-content-between mb-2">
                    <h4>{{ title }}</h4>

                    <span><a href="/products" style="text-decoration:none">Ver mas</a></span>
                </div>
                
            </b-row>
            <b-row>
                <b-col xs="12" md="3" v-for="producto of productos" :key="producto.id">
                  <div>
                    <Tarjetas :nombre="producto.titulo" :categoria="producto.categoria" :imagen="producto.image" :id="producto.id"/>
                  </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    span a{
        color: #28A745 !important;
    }
</style>

<script>

import Tarjetas from '@/components/Tarjetas.vue'

export default {
    name: 'Nproductos',
    components: {
        Tarjetas
    },
    props: {
        title: String
    },
    data(){
        return {
            productos: [
                {id: '12', titulo: 'Camilo', categoria: 'Alarmas', image: 'https://picsum.photos/id/1/0/0'},
                {id: '32',titulo: 'Jose', categoria: 'Baterias', image: 'https://picsum.photos/id/2/0/0'},
                {id: '42',titulo: 'Carlos', categoria: 'Alarmas', image: 'https://picsum.photos/id/3/0/0'},
                {id: '34',titulo: 'Antonio', categoria: 'Accesorios para el control del acceso', image: 'https://picsum.photos/id/4/0/0'}
            ]
        }
    }
};
</script>