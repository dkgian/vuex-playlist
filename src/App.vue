<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'app',
  data () {
    return {
      products: [
        { name: 'Banana', price: 10 },
        { name: 'Grape', price: 15 },
        { name: 'Apple', price: 12 },
        { name: 'Pineapple', price: 20 },
      ],
    }
  }
}
</script>

<style>

</style>
