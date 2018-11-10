<template>
  <div id="product-list-two">
    <h2>Product list 2 - Origin</h2>
    <ul>
      <li v-for="product in products" v-bind:key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }}</span>
     </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    saleProducts() {
      return this.$store.getters.saleProducts
    }
  },
}
</script>

<style scoped>
.price {
  font-weight: bold;
  color: brown;
  display: block;
}
#product-list-two {
  background: lightblue;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-two ul {
  padding: 0;
  list-style-type: none;
}
#product-list-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: yellowgreen;
}
</style>
