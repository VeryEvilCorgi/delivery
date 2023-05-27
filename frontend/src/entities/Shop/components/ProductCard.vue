<template>
  <div class="w-[300px] h-[300px] border rounded px-5 py-5">
    <div class="w-11/12 h-[150px] mx-auto border"></div>
    <div class="mt-5 ml-5">
      <p>{{ props.name }}</p>
      <p class="text-red-500 text-xl">{{ props.price }}$</p>
    </div>
    <div class="flex justify-end">
      <Button @click="addToCart">Add to cart</Button>
    </div>
  </div>
</template>

<script setup>
//store
import { useShopStore } from "../../../store";
//components
import Button from "../../../ui/buttons/Button.vue";

//props
const props = defineProps({
  id: Number,
  name: String,
  price: Number,
});

//store
const shopStore = useShopStore();

//methods
//це можна зроюити краще, як і багато чого в цьому проекті, але 3 дні замало
const addToCart = () => {
  shopStore.addToCart({
    id: props.id,
    count: 1,
    name: props.name,
    price: props.price,
  });
};
</script>

<style>
</style>