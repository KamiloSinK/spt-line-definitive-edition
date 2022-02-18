<template>
    <div>
        <!-- Aqui ira la ruta -->

        <b-container class="my-5 py-5">
          <b-row>
            <b-col md="2">
            </b-col>
            <b-col md="8">
              <div class="py-3 mt-4 d-block flex-row justify-content-center">
                <h5>¿Estas interesado en nuestros productos?</h5>

                <h3>Escribenos y obten más información acerca de los productos SPT LINE</h3>
              </div>
              <div class="py-3">
                <label for="nombre">Nombre *</label>
                <b-form-input id="nombre" type="text" style="height: 3rem"></b-form-input>
              </div>
              <div class="py-3">
                <label for="nombre">Correo Electronico *</label>
                <b-form-input id="nombre" type="email" style="height: 3rem"></b-form-input>
              </div>
              <div class="py-3">
                <label for="nombre">Telefono *</label>
                <b-form-input id="nombre" type="number" style="height: 3rem"></b-form-input>
              </div>
              <div class="py-3">
                <label for="nombre">Direccion *</label>
                <b-form-input id="nombre" type="text" style="height: 3rem"></b-form-input>
              </div>
              <div class="py-3">
                <label for="nombre">Deja tu pregunta o comentario</label>
                <b-form-textarea
                  id="textarea"
                  placeholder="Escribenos..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </div>
              <div class="py-3 d-flex flex-row justify-content-end">
                <b-button variant="success" class="text-white">Enviar</b-button>
              </div>
            </b-col>
          </b-row>
        </b-container>
    </div>
</template>

<style>
  .d-block h3,.d-block h5{
    text-align: center;
  }
  label{
    font-weight: bold;
    margin-bottom: 1rem;
  }
  div .d-flex button{
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }
</style>

<script>

export default {
  name: 'Contacto'
}
</script>