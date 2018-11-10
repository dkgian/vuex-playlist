<template>
  <div id="product-list-one">
    <h2>Product list 1 - Sale</h2>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
     </li>
    </ul>
    <button v-on:click="reducePrice(1)">reducePrice</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    ...mapGetters([
      'saleProducts',
    ]),
  },
  methods: {
    ...mapActions([
      'reducePrice',
    ]),
  }
}
</script>

<style scoped>
.price {
  font-weight: bold;
  color: brown;
  display: inline;
}
#product-list-one {
  background: lightyellow;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
  list-style-type: none;
}
#product-list-one li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: yellowgreen;
}
</style>
