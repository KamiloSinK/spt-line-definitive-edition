<template>
    <div class="py-4 mb-5 container">
        
            <h4 class="mb-4">Nuestras categorias</h4>

            <b-row>
                <b-col xs="12" sm="6" md="3" class="hCat">
                    <a href="" style="text-decoration:none">
                        <div class="">
                            <b-card no-body class="text-center sombra hCat">
                                <div class="bg-light text-success">
                                    <div class="d-flex flex-row justify-content-center py-5 catSize">
                                        <b-img :src="require('../assets/Vector.png')"></b-img>
                                    </div>
                                    <div class="pb-3">
                                        <h4>Accesorios para camara</h4>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </a>
                </b-col>
                <b-col xs="12" sm="6" md="3" class="hCat">
                    <a href="" style="text-decoration:none">
                        <div class="">
                            <b-card no-body class="text-center sombra hCat">
                                <div class="bg-light text-success">
                                    <div class="d-flex flex-row justify-content-center py-5 catSize">
                                        <b-img :src="require('../assets/Vector-1.png')"></b-img>
                                    </div>
                                    <div class="pb-3">
                                        <h4>Baterias</h4>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </a>
                </b-col>
                <b-col xs="12" sm="6" md="3" class="hCat">
                    <a href="" style="text-decoration:none">
                        <div class="">
                            <b-card no-body class="text-center sombra hCat">
                                <div class="bg-light text-success">
                                    <div class="d-flex flex-row justify-content-center py-5 catSize">
                                        <b-img :src="require('../assets/Vector-2.png')"></b-img>
                                    </div>
                                    <div class="pb-3">
                                        <h4>Accesorios para el control del acceso</h4>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </a>
                </b-col>
                <b-col xs="12" sm="6" md="3" class="hCat">
                    <a href="" style="text-decoration:none">
                        <div class="">
                            <b-card no-body class="text-center sombra hCat">
                                <div class="bg-light text-success">
                                    <div class="d-flex flex-row justify-content-center py-5 catSize">
                                        <b-img :src="require('../assets/Vector-3.png')"></b-img>
                                    </div>
                                    <div class="pb-3">
                                        <h4>Alarmas</h4>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </a>
                </b-col>
            </b-row>
        
    </div>
</template>

<style>
    h4 {
        size: 24px;
    }
    .hCat{
        height: 280px;
    }
    .catSize{
        height: 190px;
    }
</style>