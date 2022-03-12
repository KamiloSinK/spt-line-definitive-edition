import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: {id: '12', name: 'Camilo', categoria: 'Alarmas', image: 'https://picsum.photos/id/1/0/0'}
  },
  mutations: {
    setProduct(state, payload){
      state.product= payload;

    }
  },
  actions: {
  },
  modules: {
  }
})
