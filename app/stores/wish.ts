interface WishListItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export const useWishStore = defineStore("wish", {
  state: () => ({
    wishes: JSON.parse(localStorage.getItem("wishes") || "{}") as Record<
      string,
      WishListItem[]
    >,
  }),

  actions: {
    loadWishList() {
      const stored = localStorage.getItem("wishes");
      if (stored) {
        this.wishes = JSON.parse(stored);
      }
    },

    saveWishList() {
      localStorage.setItem("wishes", JSON.stringify(this.wishes));
    },

    add(product: Omit<WishListItem, "quantity">) {
      const email = useAuthStore().user?.email;
      if (!email) return;

      if (!this.wishes[email]) this.wishes[email] = [];

      const existing = this.wishes[email].find(
        (item) => item.id === product.id,
      );
      if (existing) {
        existing.quantity++;
      } else {
        this.wishes[email].push({ ...product, quantity: 1 });
      }

      this.saveWishList();
    },

    remove(id: number) {
      const email = useAuthStore().user?.email;
      if (!email) return;

      this.wishes[email] = (this.wishes[email] ?? []).filter(
        (item) => item.id !== id,
      );
      this.saveWishList();
    },
  },

  getters: {
    currentUserEmail(): string | null {
      const authStore = useAuthStore();
      return authStore.user?.email ?? null;
    },

    wish(): WishListItem[] {
      const email = useAuthStore().user?.email;
      if (!email) return [];
      return this.wishes[email] ?? [];
    },
  },
});
