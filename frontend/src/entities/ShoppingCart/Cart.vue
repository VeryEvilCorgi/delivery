<template>
  <div class="flex">
    <div class="w-1/2 py-5 px-5">
      <div class="w-10/12 flex flex-col mx-auto border rounded items-center">
        <label>name</label>
        <input type="text" v-model="forms.name" class="border h-14 w-1/2" />
        <label>email</label>
        <input type="text" v-model="forms.email" class="border h-14 w-1/2" />
        <label>phone</label>
        <input type="text" v-model="forms.phone" class="border h-14 w-1/2" />
        <label>address</label>
        <input type="text" v-model="forms.adress" class="border h-14 w-1/2" />
      </div>

      <p class="text-2xl text-red-500 mt-10">TOTAL: {{ totalPrice }}</p>

      <Button @click="createOrder" class="mt-5">Submit order</Button>
    </div>
    <div class="w-1/2">
      <CartCard
        v-for="product in shopStore.cart"
        @add-item="addItemToCart(product)"
        @delete-item="deleteItemFromCart(product.id)"
        :key="product.id"
        :product="product"
        class="my-2 mx-2"
      />
    </div>
  </div>
</template>

<script setup>
//vue
import { reactive, computed } from "vue";
//api
import ApiClient from "../../plugins/api";
//store
import { useShopStore } from "../../store";
//components
import CartCard from "./components/CartCard.vue";
import Button from "../../ui/buttons/Button.vue";

//store
const shopStore = useShopStore();

//state
const forms = reactive({
  name: "",
  phone: "",
  email: "",
  adress: "",
});

const totalPrice = computed(() =>
  shopStore.cart.reduce(
    (acc, current) => (acc += current.price * current.count),
    0
  )
);

//methods
const addItemToCart = (product) => shopStore.addToCart(product);

const deleteItemFromCart = (productId) =>
  shopStore.deleteOneProductFromCart(productId);

const createOrder = async () => {
  try {
    const { status } = await ApiClient.post("/order", {
      ...forms,
      products: shopStore.cart.map(({ id, count }) => ({ id, count })),
      shopname: shopStore.currentShop.name,
    });
  
    if(status === 201) {
      alert('created')
    }
    
  } catch (error) {
      throw error
  }
};
</script>

<style>
</style>