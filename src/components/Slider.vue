<template>
    <div>
        <b-carousel
            id="carousel-1"
            class="formato"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >
            <!-- Text slides with image -->
            <b-carousel-slide img-src=""
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="">
                <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="">

            </b-carousel-slide>
            
        </b-carousel>
    </div>
</template>

<style>
    .formato{
        background: linear-gradient(180deg, #28A745 0%, #2C2C2C 100%);;
        /*width: 1024px;*/
        height: 500px;
        text-shadow: 1px 1px 2px #333;
    }
</style>