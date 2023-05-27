<template>
  <component :is="activeLayout">
    <router-view />
  </component>
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import DefaultLayout from "./layouts/default/DefaultLayout.vue";

const route = useRoute();

const activeLayout = computed(() => route.meta?.layout || DefaultLayout);
</script>


<style>
@import url("./assets/styles/index.css");
</style>
