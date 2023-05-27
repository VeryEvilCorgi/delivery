import { defineStore } from "pinia";

export const useShopStore = defineStore("shop", {
  state: () => ({
    cart: [],
    currentShop: {
      id: undefined,
      name: "",
    },
  }),
  actions: {
    addToCart(product) {
      const productFromStore = this.cart.find(({ id }) => id === product.id);

      if (productFromStore) {
        return (this.cart = this.cart.map((product) => {
          if (product.id === productFromStore.id)
            return { ...product, count: product.count + 1 };
          return product;
        }));
      }

      this.cart.push(product);
    },
    deleteFromCart(product) {
      this.cart.filter(({ id }) => id !== product.id);
    },
    deleteOneProductFromCart(productId) {
      const product = this.cart.find(({ id }) => id === productId);

      if (product.count - 1 <= 0) {
        this.cart = this.cart.filter(({ id }) => id !== product.id);
      }

      this.cart = this.cart.map((productInMap) => {
        if (productInMap.id === product.id)
          return { ...productInMap, count: productInMap.count - 1 };
        return productInMap;
      });
    },

    clearCart() {
      this.cart = [];
    },

    setShopName(shop) {
      this.currentShop = shop;
    },
  },
});
