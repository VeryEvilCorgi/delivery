<template>
  <nav class="h-20 flex items-center pl-5 text-2xl relative">
    <router-link to="/" class="mr-5">Shop</router-link>
    <router-link to="/cart">Cart</router-link>
    <Bage class="ml-2"
      ><span>{{ shopStore.cart?.length }}</span></Bage
    >
    <router-link to="/history" class="ml-5">Orders history</router-link>
  </nav>
</template>

<script setup>
//store
import { useShopStore } from "../../../store";
//components
import Bage from "../../../ui/bages/Bage.vue";

const shopStore = useShopStore();
</script>

<style>
</style>