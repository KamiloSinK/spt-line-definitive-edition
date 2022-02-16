<template>
    <div>
        <b-container class="py-5">
            <b-row>
                <b-col md="11">
                    <h4>Nuestros productos</h4>
                </b-col>
                <b-col md="1">
                    <p><a href="/products">Ver mas</a></p>
                </b-col>
            </b-row>
            <b-row class="pt-3">
                <b-col>
                    <Tarjetas />
                </b-col>
                <b-col>
                     <Tarjetas />
                </b-col>
                <b-col>
                     <Tarjetas />
                </b-col>
                <b-col>
                     <Tarjetas />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>

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