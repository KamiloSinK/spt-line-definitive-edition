<template>
    <div>
        <b-container class="py-4 mb-5">
            <h4>Nuestras categorias</h4>

            <b-row>
                <b-col>
                    <a href="" style="text-decoration:none">
                        <div>
                            <b-card no-body class="text-center sombra">
                                <div class="bg-light text-success my-5">
                                    <b-img :src="require('../assets/Vector.png')" class="mb-3"></b-img>
                                    <h4>Accesorios para camara</h4>
                                </div>
                            </b-card>
                        </div>
                    </a>
                </b-col>
                <b-col>
                    <a href="" style="text-decoration:none">
                        <div>
                            <b-card no-body class="text-center sombra">
                                <div class="bg-light text-success my-5">
                                    <b-img :src="require('../assets/Vector-1.png')" class="mb-5"></b-img>
                                    <h4>Bateria</h4>
                                </div>
                            </b-card>
                        </div>
                    </a>
                </b-col>
                <b-col>
                    <a href="/" style="text-decoration:none">
                        <div>
                            <b-card no-body class="text-center sombra">
                                <div class="bg-light text-success my-5">
                                    <b-img :src="require('../assets/Vector-2.png')" class="mb-3"></b-img>
                                    <h4>Accesorios para el control del acceso</h4>
                                </div>
                            </b-card>
                        </div>
                    </a>
                </b-col>
                <b-col>
                    <a href="/" style="text-decoration:none">
                        <div>
                            <b-card no-body class="text-center sombra">
                                <div class="bg-light text-success my-5">
                                    <b-img :src="require('../assets/Vector-3.png')" class="mb-4"></b-img>
                                    <h4>Alarmas</h4>
                                </div>
                            </b-card>
                        </div>
                    </a>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    h4 {
        size: 24px;
    }
</style>