<template>
    <div>
        <b-row>
            <b-col sm="6" md="3" class="pr-2">
                <div class="provImg">
                    <img :src="require('../assets/art1.jpg')" alt="">
                </div>
            </b-col>
            <b-col sm="6" md="9" class="pl-4">
                <h6 class="pt-2">Nombre del proveedor</h6>
                <h2>Store Altamira C.A</h2>
                <b-row class="pt-1">
                    <b-col md="3">
                        <h6>Telefono</h6>
                        <h4>+52 2829487349</h4>
                    </b-col>
                    <b-col md="9">
                        <h6>Correo Electronico</h6>
                        <h4>storealtamira@example.com</h4>
                    </b-col>
                </b-row>
                <div class="pt-1">
                    <h6>Direccion</h6>
                    <h4>Altamira, calle 13, Nº 23</h4>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<style scoped>
    .provImg{
        width: 100%;
    }
</style>>

</style>

<script>
export default {
    name: 'Proveedor'
}
</script>