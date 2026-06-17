<!--<script setup lang="ts">
import { Trash2 } from "@lucide/vue";
definePageMeta({
  middleware: "auth",
});

const wishStore = useWishStore();
</script>

<template>
  <div class="p-4 space-y-6 mb-26">
   
    
    <div class="flex items-center gap-3">
      <h1 class="text-3xl font-bold">Wishlist</h1>
    </div>


    <ul class="flex flex-col gap-y-6">
      <li v-for="c in wishStore.wish" :key="c.id" class="flex gap-4">
     
        <div class="relative p-1 border rounded-xl shadow-xl">
          <img :src="c.image" class="w-24 h-26 rounded-xl bg-gray-100" />
          <Button
            class="absolute bottom-2 left-2 bg-white size-10 rounded-full shadow grid place-items-center"
            @click="wishStore.remove(c.id)"
          >
            <Trash2 class="text-red-500 size-5" />
          </Button>
        </div>

  
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <h3>
              {{ c.title }}
            </h3>
          </div>
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold">${{ c.price }}</h2>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
-->

<script setup lang="ts">
import { Trash2, PackagePlus } from "@lucide/vue";
import Button from "~/components/ui/button/Button.vue";

const wishStore = useWishStore();
const cartStore = useCartStore();

function changePage(id: number) {
  navigateTo(`/products/${id}`);
}
</script>

<template>
  <div class="p-6 space-y-6 mb-26">
    <!-- title -->
    <div class="flex items-center gap-3">
      <h1 class="text-3xl font-bold">Whishlist</h1>
    </div>

    <!-- products -->
    <ul class="flex flex-col gap-y-6">
      <li v-for="w in wishStore.wish" :key="w.id" class="flex gap-4">
        <!-- image -->
        <div class="relative p-1 border rounded-xl shadow-xl">
          <img
            :src="w.image"
            class="w-32 h-27 rounded-xl bg-gray-100"
            @click="changePage(w.id)"
          />
          <Button
            class="absolute bottom-2 left-2 bg-white size-10 rounded-full shadow grid place-items-center"
            @click="wishStore.remove(w.id)"
          >
            <Trash2 class="text-red-500 size-5" />
          </Button>
        </div>

        <!-- info -->
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-sm">
              {{ w.title }}
            </h3>
          </div>
          <div class="flex justify-between items-baseline">
            <h2 class="text-xl font-bold">${{ w.price }}</h2>

            <div class="flex items-center gap-1">
              <Button
                class="size-8 grid place-items-center bg-white hover:bg-white"
                @click="cartStore.add(w)"
              >
                <PackagePlus class="text-blue-600 size-7" />
              </Button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
