<template>
    <div>
        <div class="bg-black py-5">
            <b-container>
                <b-row>
                    <b-col xs="6" md="3">
                        <h5>Nuestra empresa</h5>
                        <p>Informacion - calle colorado #45</p>
                        <p>Telefono: +53 482 48394</p>
                        <p>Correo: spt@seguridadparati.com</p>
                    </b-col>
                    <b-col xs="6" md="3">
                        <h5>Consulte servicio al cliente</h5>
                        <p><a href="/">Catalogo</a></p>
                        <p><a href="/">Soporte</a></p>
                        <p><a href="/">Hoja de especificaciones</a></p>
                        <p><a href="/">Conviertase en un distribuidor</a></p>
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                </b-row>
            </b-container>
        </div>
        <div class="bg-green py-3">
            <b-container>
                <div class="d-block">
                    <h6 class="text-white">Todos los derechos registrados. Ofrecemos excelente servicio y productos de calidad al mejor precio</h6>
                    <h6 class="text-light h7">Copyright © 2022 SPT LINE</h6>
                </div>
            </b-container>
        </div>
    </div>
</template>

<style>
    h6, .h7{
        font-size: 16px;
    }
    .bg-black{
        background: black;
        color: white;
    }

    .bg-green{
        background: #28A745;
        text-align: center
    }
    a {
    outline: none;
    text-decoration: none
    }

    a:link {
    color: #ffffff;
    }

    a:visited {
    color: #dcdcdc;
    }
</style>