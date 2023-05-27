<template>
  <div class="grid grid-cols-3">
    <ProductCard
      v-for="{ id, name, price } in props.products"
      :key="id"
      :name="name"
      :price="price"
      :id="id"
      class="my-5 mx-5"
    />
  </div>
</template>

<script setup>
//components
import ProductCard from "./ProductCard.vue";

//props
const props = defineProps({
  products: Array,
});
</script>

<style>
</style>