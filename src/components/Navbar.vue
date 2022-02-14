<template>
    <div>
        <div>
            <b-navbar toggleable="lg">
                <b-navbar-brand to="/" class="mr-5">SPT Line</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar..."></b-form-input>
                        <b-button size="sm" variant="outline-dark" type="submit">
                            <b-icon icon="search"></b-icon>
                        </b-button>
                        </b-nav-form>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/">Home</b-nav-item>
                        <b-nav-item to="/products">Productos</b-nav-item>
                        <b-nav-item to="/contacto">Contacto</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
}
</script>