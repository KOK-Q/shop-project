<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";

definePageMeta({
  middleware: "auth",
});

const productStore = useProductStore();

const selectedCategories = ref<string[]>([]);

const filteredProducts = computed(() =>
  selectedCategories.value.length
    ? productStore.products.filter((p) =>
        selectedCategories.value.includes(p.category),
      )
    : productStore.products,
);
</script>

<template>
  <div class="grid gap-3 px-4 mt-12">
    <!-- header and search bar -->
    <div class="flex items-center gap-4">
      <h1 class="text-[28px] font-bold">Shop</h1>

      <SearchbarComponent v-model="selectedCategories" />
    </div>

    <!-- banner -->
    <BannerSlides />

    <!-- category -->
    <CategoryCircles v-model="selectedCategories" />

    <div class="space-y-2">
      <div class="flex justify-between items-baseline">
        <h1 class="font-bold text-xl">Categories</h1>
        <div class="flex gap-3 items-center">
          <h3 class="text-sm font-semibold">See All</h3>
          <div
            class="w-7.5 h-7.5 flex items-center justify-center bg-blue-600 rounded-full hover:bg-gray-200 transition"
          >
            <ArrowRight class="text-white" :size="20" />
          </div>
        </div>
      </div>

      <div>
        <CategoryProducts />
      </div>
    </div>

    <!-- Products -->
    <div>
      <h1 class="font-bold text-2xl mb-2">Products</h1>
      <ProductList :products="filteredProducts" />
    </div>
  </div>
</template>
