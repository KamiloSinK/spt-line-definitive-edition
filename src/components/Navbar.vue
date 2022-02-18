<template>
    <div>
        <b-container>
            <b-navbar toggleable="lg">
                <b-navbar-brand to="/" class="mr-5">
                    <img src="../assets/logonav.png" alt="logoNavbar">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-form class="falseinput">
                            <b-input-group size="sm">
                                <b-form-input placeholder="Buscar..." style="border: 0"></b-form-input>

                                <template #append>
                                    <b-button variant="white" type="submit">
                                        <b-icon icon="search"></b-icon>
                                    </b-button>
                                </template>
                            </b-input-group>
                        </b-nav-form>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/" class="px-3"><span>Home</span></b-nav-item>
                        <b-nav-item to="/products" class="px-3"><span>Productos</span></b-nav-item>
                        <b-nav-item to="/contacto" class="px-3"><span>Contacto</span></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </div>
</template>

<style>
    .falseinput {
        border: 1px solid #6C757D;
        border-radius: 20px;
        outline: none;
    }
    span {
        color:  #28A745;
    }
    .form-inline{
        width: 100%;
    }
</style>

<script>
    export default {
        name: 'Navbar'
}
</script>