<template>
  <div class="h-[300px] w-[700px] border rouned px-5 py-5 flex flex">
    <div class="w-8/12 h-10/12 border rounded"></div>
    <div class="flex flex-col justify-center items-center w-4/12">
      <p class="text-xl">{{ product.name }}</p>
      <p class="text-red-500">Price:{{ product.price }}$</p>
      <p class="mt-2">Count:{{ product.count }}</p>
      <div class="flex mt-2">
        <SquereButton @click="emits('add-item')" class="mr-2">
          <p>+</p>
        </SquereButton>
        <SquereButton @click="emits('delete-item')">
          <p>-</p>
        </SquereButton>
      </div>
    </div>
  </div>
</template>

<script setup>
//components
import SquereButton from "../../../ui/buttons/SquereButton.vue";

//emits
const emits = defineEmits(["add-item", "delete-item"]);

//props
const props = defineProps({
  product: Object,
});
</script>

<style>
</style>