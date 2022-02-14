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
            <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/500/?image=52"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/500/?image=54">
                <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/500/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
                <template #img>
                <img
                    class="d-block img-fluid w-100"
                    src="https://picsum.photos/1024/500/?image=55"
                    alt="image slot"
                    img-height="100%"
                >
                </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
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