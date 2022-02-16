<template>
    <div class="suscrip">
        <b-container class="py-5">
            <b-row>
                <b-col md="8">
                    <h4>Quieres recibir promociones y ofertas especiales?</h4>
                    <h2>Suscribete a nuestro newsletter y recibe las mejores promociones para hacer de tu vida segura</h2>
                </b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col md="9">
                    <b-input-group size="lg" class="mt-5">
                        <b-form-input placeholder="Suscribete..."></b-form-input>
                        <b-input-group-append>
                        <b-button variant="success" class="fuenteB">Suscribirse</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    .suscrip{
        background-image: url("../assets/suscripcion.png");
        height: 320px;
        max-width: 100%;
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
</style>