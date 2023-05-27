<template>
  <div class="flex">
    <ShopList
      @select-shop="setCurrentShop"
      :shops="shopList"
      :currentShop="shopStore.currentShop.id"
    />
    <ProductsList :products="productsList" />
  </div>
</template>

<script setup>
//vue
import { ref, onMounted, computed, watch } from "vue";
//store
import { useShopStore } from "../../store";
//api
import ApiClient from "../../plugins/api";
//components
import ShopList from "./components/ShopList.vue";
import ProductsList from "./components/ProductsList.vue";

//state
const shops = ref([]);

const shopList = computed(() =>
  shops.value.map(({ id, name }) => ({ id, name }))
);
const productsList = computed(
  () =>
    shops.value.find((shop) => shop.id === shopStore.currentShop?.id)?.products
);

//store
const shopStore = useShopStore();

//hooks
onMounted(() => {
  initData();
});

watch(
  () => shopStore.currentShop.id,
  (current, prev) => {
    if (current !== prev) shopStore.clearCart();
  }
);

//methods
const initData = async () => {
  await getShops();
  setCurrentShop(shopList.value[0]);
};
const getShops = async () => {
  try {
    const { data, status } = await ApiClient.get("shop");
    shops.value = data;
    return status;
  } catch (error) {
    throw error;
  }
};

const setCurrentShop = (shop) => {
  shopStore.setShopName(shop);
};
</script>

<style>
</style>