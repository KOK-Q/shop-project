<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";
import type { EmblaCarouselType } from "embla-carousel";

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

const api = ref();
const current = ref(0);

function setApi(carouselApi: EmblaCarouselType | undefined) {
  if (!carouselApi) return;

  api.value = carouselApi;

  current.value = carouselApi.selectedScrollSnap();

  carouselApi.on("select", () => {
    current.value = carouselApi.selectedScrollSnap();
  });
}
</script>

<template>
  <div class="grid gap-6 p-4 pb-12">
    <!-- header and search bar -->
    <div class="flex justify-between items-baseline">
      <h1 class="text-2xl font-bold">Shop</h1>

      <SearchbarComponent v-model="selectedCategories" />
    </div>

    <!-- banner -->
    <Carousel @init-api="setApi">
      <CarouselContent>
        <CarouselItem>
          <div class="p-1 h-48">
            <img src="/images/BigSaleBanner.png" class="w-full h-full" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="p-1 h-48">
            <img src="/images/BigSaleBanner1.png" class="w-full h-full" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="p-1 h-48">
            <img src="/images/BigSaleBanner.png" class="w-full h-full" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="p-1 h-48">
            <img src="/images/BigSaleBanner1.png" class="w-full h-full" />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <div class="flex justify-center gap-3">
      <button
        v-for="(_, index) in 4"
        :key="index"
        class="transition-all duration-30 rounded-full"
        :class="
          current === index ? 'w-10 h-3 bg-blue-600' : 'w-3 h-3 bg-slate-300'
        "
        @click="api?.scrollTo(index)"
      />
    </div>

    <CategoryCircles v-model="selectedCategories" />

    <!-- category -->
    <div class="space-y-2">
      <div class="flex justify-between items-baseline">
        <h1 class="font-bold text-xl">Categories</h1>
        <div class="flex gap-2 font">
          <h3 class="font-bold">See All</h3>
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
      <h1 class="font-bold text-2xl mb-2">Products</h1>
      <ProductList :products="filteredProducts" />
    </div>
  </div>
</template>
