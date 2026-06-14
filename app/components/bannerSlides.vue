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
</script>

<template>
  <Carousel @init-api="setApi">
    <CarouselContent>
      <CarouselItem>
        <div class="h-34">
          <img src="/images/BigSaleBanner.png" class="w-full h-full" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="h-34">
          <img src="/images/BigSaleBanner1.png" class="w-full h-full" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="h-34">
          <img src="/images/BigSaleBanner.png" class="w-full h-full" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="h-34">
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
</template>
