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
  <div class="grid gap-6 p-4 pb-12">
    <!-- header and search bar -->
    <div class="flex justify-between items-baseline">
      <h1 class="text-2xl font-bold">Shop</h1>

      <SearchbarComponent v-model="selectedCategories" />
    </div>

    <!-- banner -->
    <Carousel>
      <CarouselContent class="w-full!">
        <CarouselItem>
          <div class="p-1">
            <img src="/images/BigSaleBanner.png" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="p-1">
            <img src="/images/BigSaleBanner1.png" />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="left-0" />
      <CarouselNext class="right-0" />
    </Carousel>

    <CategoryCircles v-model="selectedCategories" />

    <!-- category -->
    <div class="space-y-2">
      <div class="flex justify-between items-baseline">
        <h1 class="font-bold text-xl">Categories</h1>
        <div class="flex gap-2">
          <h3>see all</h3>
          <div
            class="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full hover:bg-gray-200 transition"
          >
            <ArrowRight class="text-white" />
          </div>
        </div>
      </div>

      <div>
        <CategoryProducts />
      </div>
    </div>

    <!-- Products -->
    <div>
      <h1 class="font-bold text-2xl">Products</h1>
      <ProductList :products="filteredProducts" />
    </div>
  </div>
</template>
