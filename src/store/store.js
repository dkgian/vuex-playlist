import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [
      { name: 'Banana', price: 10 },
      { name: 'Grape', price: 15 },
      { name: 'Apple', price: 12 },
      { name: 'Pineapple', price: 20 },
    ],
  },
})

export default store
