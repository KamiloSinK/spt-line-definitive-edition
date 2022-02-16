<template>
    <div>
        <div>
            <b-navbar toggleable="lg">
                <b-navbar-brand to="/" class="mr-5">
                    <img src="../assets/logonav.png" alt="Kitten">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-form class="falseinput px-2">
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar..." style="border: 0"></b-form-input>
                        <b-button size="sm" variant="white" type="submit">
                            <b-icon icon="search"></b-icon>
                        </b-button>
                        </b-nav-form>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/"><span>Home</span></b-nav-item>
                        <b-nav-item to="/products" class="mx-5"><span>Productos</span></b-nav-item>
                        <b-nav-item to="/contacto"><span>Contacto</span></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<style>
    .falseinput {
        border: 1px solid #6C757D;
        border-radius: 20px;
    }
    span {
        color:  #28A745;
;
    }
</style>

<script>
    export default {
        name: 'Navbar'
}
</script>