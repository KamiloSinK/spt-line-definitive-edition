<template>
    <div class="container">
        <div class="pt-4">
          <p>Ruta/Subs-ruta</p>
        </div>
        <b-row>
            <b-col md="6">
                <b-img src="https://picsum.photos/250/250/?image=54" fluid alt="Responsive image" class="imagen"></b-img>
                <b-container fluid class="p-4">
                    <b-row>
                        <b-col>
                        <a href="#"><b-img fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img></a>
                        </b-col>
                        <b-col>
                        <b-img fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
                        </b-col>
                        <b-col>
                        <b-img fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
                        </b-col>
                        <b-col>
                        <b-img fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
            <b-col md="6">

            </b-col>
        </b-row>
    </div>
</template>

<style scoped>
    .imagen{
        height: 30rem;
    }
</style>

<script>
export default {
    name: productpage,
    data() {
        return {
            imagen: String,
        }
    }
}
</script>