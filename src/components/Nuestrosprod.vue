<template>
    <div>
        <b-container class="pt-5">
            <b-row class="pb-md-3">
                <div class="container d-flex justify-content-between mb-2">
                    <h4>Nuestros productos</h4>

                    <span><a href="/products" style="text-decoration:none">Ver mas</a></span>
                </div>
                
            </b-row>
            <b-row>
                <b-col xs="12" md="3">
                    <Tarjetas />
                </b-col>
                <b-col xs="12" md="3">
                     <Tarjetas />
                </b-col>
                <b-col xs="12" md="3">
                     <Tarjetas />
                </b-col>
                <b-col xs="12" md="3">
                     <Tarjetas />
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
  }
};
</script>