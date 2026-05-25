export const useCart = () => {
  const cartStore = useCartStore();

  return {
    cart: cartStore.cart,
    addtoCart: cartStore.add,
    removeFromcart: cartStore.remove,
    countItems: cartStore.cartCount,
    totalPrice: cartStore.totalPrice,
    increase: cartStore.increase,
    decrease: cartStore.decrease,
  };
};
