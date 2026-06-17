<script setup lang="ts">
import { Plus, Minus, Pencil, Trash2 } from "@lucide/vue";

const cartStore = useCartStore();

function changePage(id: number) {
  navigateTo(`/products/${id}`);
}
</script>

<template>
  <div class="px-5 py-12 flex flex-col gap-4 mb-26">
    <!-- title -->
    <div class="flex items-center gap-3">
      <h1 class="text-3xl font-bold">Cart</h1>
      <div
        class="size-7 rounded-full bg-indigo-100 grid place-items-center font-bold"
      >
        {{ cartStore.cart.length }}
      </div>
    </div>

    <!-- address -->
    <div
      class="bg-gray rounded-2xl py-2 px-3 flex justify-between items-center"
    >
      <div>
        <h2 class="font-bold text-sm">Shipping Address</h2>
        <p class="text-[11px] w-65">
          26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city
        </p>
      </div>

      <button
        class="bg-blue-600 w-7.5 h-7.5 rounded-full flex justify-center items-center"
      >
        <Pencil class="text-white size-3 fill-white" />
      </button>
    </div>

    <!-- products -->
    <ul class="flex flex-col gap-y-6">
      <li v-for="c in cartStore.cart" :key="c.id" class="flex gap-4">
        <!-- image -->
        <div
          class="relative p-1 border rounded-xl shadow-xl"
          @click="changePage(c.id)"
        >
          <img :src="c.image" class="w-32 h-27 rounded-xl bg-gray-100" />
          <Button
            class="absolute bottom-2 left-2 bg-white size-10 rounded-full shadow grid place-items-center"
            @click="cartStore.remove(c.id)"
          >
            <Trash2 class="text-red-500 size-5" />
          </Button>
        </div>

        <!-- info -->
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-[12px]">
              {{ c.title }}
            </h3>
          </div>
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-bold">${{ c.price }}</h2>

            <div class="flex items-center gap-1">
              <button
                class="size-8 rounded-full border-2 border-blue-600 grid place-items-center"
                @click="cartStore.decrease(c.id)"
              >
                <Minus class="text-blue-600 size-4" />
              </button>

              <div
                class="w-10 h-8 rounded-lg bg-indigo-100 grid place-items-center"
              >
                {{ c.quantity }}
              </div>

              <button
                class="size-8 rounded-full border-2 border-blue-600 grid place-items-center"
                @click="cartStore.increase(c.id)"
              >
                <Plus class="text-blue-600 size-4" />
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="bg-gray-100 flex justify-between p-2 mb-10 fixed bottom-0 w-full">
    <div class="flex gap-2">
      <p class="font-bold text-xl">Total</p>
      <h1 class="font-bold text-md">${{ cartStore.totalPrice.toFixed(3) }}</h1>
    </div>
    <Button class="bg-blue-600 px-8 py-5 overflow-hidden rounded-lg"
      >Checkout</Button
    >
  </div>
</template>
