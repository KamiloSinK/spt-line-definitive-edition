<template>
    <div>
        <b-carousel
            id="carousel-1"
            class="formato"
            img-height="500px"
            fade
            :interval="4000"
            controls
            indicators
            >
            <!-- src="../assets/logo.png"-->
            <b-carousel-slide :img-src="require('../assets/slide_one.png')">
            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide :img-src="require('../assets/slide_two.png')">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide :img-src="require('../assets/slide_three.png')">

            </b-carousel-slide>
            
        </b-carousel>
    </div>
</template>

<style>
    .formato{
        background: linear-gradient(180deg, #28A745 0%, #2C2C2C 100%);
        width: 100%;
        text-shadow: 1px 1px 2px #333;
    }
</style>