<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import { useProductStore } from "~/stores/products";

const cartStore = useCartStore();
const productStore = useProductStore();
productStore.fetchProducts();
</script>

<template>
  <div v-if="productStore.pending" class="grid lg:grid-cols-4 gap-4">
    <div v-for="p in 12" :key="p">
      <SkeletonPage />
    </div>
  </div>

  <div v-else-if="productStore.error">
    {{ productStore.error }}
  </div>

  <div v-else class="grid grid-cols-2 gap-4">
    <ProductCard
      v-for="p in productStore.products"
      :key="p.id"
      :product="p"
      class="h-100"
      @add-to-cart="cartStore.add"
    />
  </div>
</template>
