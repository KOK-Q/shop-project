interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[],
  }),

  actions: {
    add(product: Omit<CartItem, 'quantity'>) {
      const existing = this.cart.find(item => item.id === product.id)

      if (existing) {
        existing.quantity++
      } else {
        this.cart.push({
          ...product,
          quantity: 1,
        })
      }
    },

    remove(id: number) {
      this.cart = this.cart.filter(item => item.id !== id)
    },

    increase(id: number) {
      const item = this.cart.find(item => item.id === id)

      if (item) {
        item.quantity++
      }
    },

    decrease(id: number) {
      const item = this.cart.find(item => item.id === id)

      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.remove(id)
      }
    },
  },

  getters: {
    totalPrice: (state): number => {
      return state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    },

    cartCount: (state): number => {
      return state.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
    },
  },
})