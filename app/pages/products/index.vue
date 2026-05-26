<script setup lang="ts">
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
  <div class="flex flex-col gap-2 p-4 pb-16">
    <h1 class="font-bold text-2xl">Products</h1>
    <SearchbarComponent v-model="selectedCategories" class="w-full" />
    <ProductList :products="filteredProducts" />
  </div>
</template>
