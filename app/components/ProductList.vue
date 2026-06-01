<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import { useProductStore } from "~/stores/products";

const cartStore = useCartStore();
const productStore = useProductStore();

await productStore.fetchProducts();

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

defineProps<{
  products?: Product[];
}>();
</script>

<template>
  <div v-if="productStore.pending" class="grid lg:grid-cols-4 gap-4">
    <SkeletonPage v-for="n in 12" :key="n" />
  </div>

  <div v-else-if="productStore.error">
    {{ productStore.error }}
  </div>

  <div v-else class="grid grid-cols-2 gap-4">
    <ProductCard
      v-for="p in products || productStore.products"
      :key="p.id"
      :product="p"
      @add-to-cart="cartStore.add"
    />
  </div>
</template>
