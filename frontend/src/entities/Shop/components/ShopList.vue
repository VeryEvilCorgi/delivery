<template>
  <div class="w-3/12 border h-full py-5">
    <h2 class="text-center mb-5">Shops:</h2>
    <SimpleCard
      @click="emits('select-shop', { id, name })"
      v-for="{ id, name } in props.shops"
      :key="id"
      :class="[
        'w-5/6 mx-auto mt-2 h-[60px] cursor-pointer duration-300',
        { 'bg-blue-500 text-white': props.currentShop === id },
      ]"
    >
      <p class="text-xl">{{ name }}</p>
    </SimpleCard>
  </div>
</template>

<script setup>
import { onUpdated } from "vue";
//components
import SimpleCard from "../../../ui/cards/SimpleCard.vue";

//emits
const emits = defineEmits(["select-shop"]);

onUpdated(() => console.log(props));

//props
const props = defineProps({
  shops: Array,
  currentShop: Number,
});
</script>

<style>
</style>