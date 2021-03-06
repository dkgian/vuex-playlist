import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: 'Banana', price: 10 },
      { name: 'Grape', price: 15 },
      { name: 'Apple', price: 12 },
      { name: 'Pineapple', price: 20 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      const saleProducts = state.products.map(product => ({
        name: `**${product.name}**`,
        price: product.price / 2,
      }))
      return saleProducts
    },
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach((product) => {
        product.price -= payload
      })
    },
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 1000)
    },
  },
})

export default store
