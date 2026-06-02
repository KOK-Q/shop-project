interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    pending: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProducts() {
      this.pending = true;
      this.error = null;

      try {
        await new Promise((resolve) => setTimeout(resolve, 900));
        const data = await $fetch<Product[]>(
          "https://fakestoreapi.com/products",
        );

        this.products = data;
      } catch {
        this.error = "Failed to fetch products";
      } finally {
        this.pending = false;
      }
    },

    delete(id: number) {
      this.products = this.products.filter((product) => product.id !== id);
    },
  },

  getters: {
    groupedCategories: (state) => {
      const result: Record<string, Product[]> = {};

      for (const product of state.products) {
        const category = product.category;

        if (!result[category]) {
          result[category] = [];
        }

        result[category].push(product);
      }

      return result;
    },

    categories: (state) => [...new Set(state.products.map((p) => p.category))],
  },
});
