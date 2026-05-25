<script setup lang="ts">
import { Camera, ArrowRight } from "@lucide/vue";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="grid gap-6 p-4 pb-12">
    <!-- header and search bar -->
    <div class="flex gap-6 items-baseline">
      <h1 class="text-2xl font-bold">Shop</h1>
      <div>
        <InputGroup class="bg-gray-100 rounded-full border-none">
          <InputGroupAddon align="inline-end">
            <Camera class="size-5" color="blue" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search" />
        </InputGroup>
      </div>
    </div>

    <!-- banner -->
    <div>
      <Carousel class="w-full">
        <CarouselContent>
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
        <CarouselPrevious class="left-2" />
        <CarouselNext class="right-2" />
      </Carousel>
    </div>

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
      <ProductList />
    </div>
  </div>
</template>
