<template>
  <div class="rounded border flex flex-col items-center">
    <label>email</label>
    <input
      v-model="forms.email"
      type="text"
      class="mt-5 w-[150px] h-[40px] border"
    />
    <label>phone</label>
    <input
      v-model="forms.phone"
      type="text"
      class="mt-5 w-[150px] h-[40px] border"
    />
    <Button @click="getHistory">Get History</Button>

    <div>
      <div
        v-for="{ id, name, phone, products, shopname, total } in history"
        :key="id"
        class="border px-5 py-5 flex flex-col items-center w-[700px]"
      >
        <p>Clien name: {{ name }}</p>
        <p>Phone: {{ phone }}</p>

        <p class="mt-10">Your order:</p>
        <div v-for="product in products" :key="product.id" class="w-full text-center">
          <p>name: {{ product.name }}</p>
          <p>count: {{ product.count }}</p>
          <p>price: {{ product.price }}</p>
        </div>
        <p class="mt-10">Shop: {{ shopname }}</p>
        <p>Total price: {{ total }}$</p>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { reactive, ref } from "vue";
//api
import ApiClient from "../../plugins/api";
//components
import Button from "../../ui/buttons/Button.vue";

//state
const forms = reactive({
  phone: "",
  email: "",
});
const history = ref([]);

//methods
//в ідеалі перенести всі функції дляс роботи з апі в окреме місце, але немає часу
const getHistory = async () => {
  try {
    const { data } = await ApiClient.get("/order", { params: forms });

    history.value = data;
  } catch (error) {
    throw eror;
  }
};
</script>

<style>
</style>