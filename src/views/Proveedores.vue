<template>
    <div class="container">
        <div class="pt-4">
          <p>Ruta/Subs-ruta</p>
        </div>
        <h4 class="pt-3 pb-4">Listado de proveedores SPT LINE</h4>
        <Proveedor />
    </div>
</template>

<style>

</style>

<script>

import Proveedor from '@/components/Proveedor.vue'

export default {
    name: 'Proveedores',
    components: {
        Proveedor
    }
}
</script>