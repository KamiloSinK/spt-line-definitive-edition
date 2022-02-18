<template>
    <div class="suscrip">
        <b-container class="py-5">
            <b-row>
                <b-col md="8">
                    <h4>¿Quieres recibir promociones y ofertas especiales?</h4>
                    <h2 class="d-none d-md-flex">Suscribete a nuestro newsletter y recibe las mejores promociones para hacer de tu vida segura</h2>
                    <h4 class="d-md-none">Suscribete a nuestro newsletter y recibe las mejores promociones para hacer de tu vida segura</h4>
                </b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col md="10">
                    <div class="d-flex">
                        <b-input-group size="lg" class="mt-5">
                        <b-form-input placeholder="Suscribete..." style="height: 5rem"></b-form-input>
                        <b-input-group-append>
                        <b-button variant="success" class="fuenteB">Suscribirse</b-button>
                        </b-input-group-append>
                    </b-input-group>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    h4{
        font-size: 19px !important;
    }
    .inputB{
        height: 4rem;
    }
    .suscrip{
        background-image: url("../assets/suscripcion.png");
        position:relative;
        color: white;
        z-index:1;

    }
    .suscrip::after {
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: linear-gradient(180deg, #28A745 0%, #2C2C2C 100%);
        opacity: 0.8;
        z-index:-1;
    }
    ::placeholder{
        font-size: 16px !important;
    }
</style>