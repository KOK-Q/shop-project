<script setup lang="ts">
import type { EmblaCarouselType } from "embla-carousel";

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

const route = useRoute();
const productId = Number(route.params.id);

const productStore = useProductStore();

const product = computed(() =>
  productStore.products.find((p) => p.id === productId),
);
</script>

<template>
  <div class="h-110 bg-gray-200 flex flex-col justify-evenly items-center">
    <Carousel @init-api="setApi">
      <CarouselContent class="w-full">
        <CarouselItem v-for="i in 4" :key="i">
          <div class="h-80 w-full flex items-center justify-center">
            <img :src="product?.image" class="h-80 w-full object-contain" />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <div class="flex justify-center gap-3">
      <button
        v-for="(_, index) in 4"
        :key="index"
        class="transition-all duration-300 rounded-full"
        :class="
          current === index ? 'w-10 h-3 bg-blue-600' : 'w-3 h-3 bg-slate-300'
        "
        @click="api?.scrollTo(index)"
      />
    </div>
  </div>
</template>
