<template>
    <div>
        <div class="sombra mb-5">
            <b-card
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-5"
            >  
                <b-card-img :src="require('../assets/art1.jpg')"></b-card-img>
                <hr>
                <b-card-text>
                    <h5>Titulo</h5>
                        Categoria:
                </b-card-text>
                <b-row>
                    <b-col md="2">

                    </b-col>
                    <b-col md="10">
                        <b-button to="/" variant="success" size="sm" class="px-5 ml-3 fuenteB">Ver mas</b-button>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<style>
    hr {
        background: #28A745;
        height: 3px;
    }
</style>

<script>
export default {
    name: 'Tarjetas'
}
</script>