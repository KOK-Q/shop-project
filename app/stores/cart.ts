interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    carts: JSON.parse(localStorage.getItem("carts") || "{}") as Record<
      string,
      CartItem[]
    >,
  }),

  actions: {
    loadCart() {
      const stored = localStorage.getItem("carts");
      if (stored) {
        this.carts = JSON.parse(stored);
      }
    },

    saveCart() {
      localStorage.setItem("carts", JSON.stringify(this.carts));
    },

    add(product: Omit<CartItem, "quantity">) {
      const email = useAuthStore().user?.email;
      if (!email) return;

      if (!this.carts[email]) this.carts[email] = [];

      const existing = this.carts[email].find((item) => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.carts[email].push({ ...product, quantity: 1 });
      }

      this.saveCart();
    },

    remove(id: number) {
      const email = useAuthStore().user?.email;
      if (!email) return;

      this.carts[email] = (this.carts[email] ?? []).filter(
        (item) => item.id !== id,
      );
      this.saveCart();
    },

    increase(id: number) {
      const email = this.currentUserEmail;
      if (!email) return;

      const item = this.carts[email]?.find((item) => item.id === id);

      if (item) {
        item.quantity++;
      }
      this.saveCart();
    },

    decrease(id: number) {
      const email = useAuthStore().user?.email;
      if (!email) return;

      const item = this.carts[email]?.find((item) => item.id === id);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.remove(id);
        return;
      }

      this.saveCart();
    },
  },

  getters: {
    currentUserEmail(): string | null {
      const authStore = useAuthStore();
      return authStore.user?.email ?? null;
    },

    cart(): CartItem[] {
      const email = useAuthStore().user?.email;
      if (!email) return [];
      return this.carts[email] ?? [];
    },

    totalPrice(): number {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },

    cartCount(): number {
      return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
  },
});
