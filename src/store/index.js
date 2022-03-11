import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: {}
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
