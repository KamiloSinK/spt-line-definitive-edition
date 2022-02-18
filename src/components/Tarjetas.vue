<template>
    <div class="cardCat">
        <b-card class="mb-5 sombra d-flex">
            <img :src="require('../assets/art1.jpg')" alt="">
            <hr>
            <div class="hCard">
                Titulo
            </div>
            <b-card-text>
            Categoria: Alarma
            </b-card-text>

            <div class="d-flex flex-row justify-content-end">
                <b-button href="#" variant="success" class="text-white px-5">Ver mas</b-button>
            </div>
        </b-card>
    </div>
</template>


<style>
    hr {
        background: #28A745;
        height: 0.1rem !important;
        
    }
    .cardCat img {
        width: 100% !important;
    }
</style>

<script>
export default {
    name: 'Tarjetas'
}
</script>