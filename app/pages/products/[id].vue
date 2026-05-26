<script setup lang="ts">
import { Heart, Plus, Minus } from "@lucide/vue";

definePageMeta({
  middleware: "auth",
});

const cartStore = useCartStore();

const route = useRoute();
const productId = Number(route.params.id);
const productStore = useProductStore();
const checked = ref(false);

const cartItem = computed(
  () => cartStore.cart.find((item) => item.id === productId) ?? null,
);

const product = computed(() =>
  productStore.products.find((p) => p.id === productId),
);
</script>

<template>
  <div v-if="product">
    <!-- img -->
    <div class="grid gap-2">
      <div class="h-80 bg-gray-200 p-6 flex justify-center items-center">
        <img :src="product.image" class="h-60 p-1" loading="lazy" />
      </div>

      <!-- content -->
      <div class="p-6 flex flex-col gap-2">
        <p class="font-extrabold text-3xl">${{ product.price }}</p>
        <h1 class="font-bold text-xl">{{ product.title }}</h1>
        <p>{{ product.description }}</p>

        <!-- size -->
        <div>
          <p class="font-bold">Size</p>
        </div>

        <!-- quantity -->
        <div class="flex justify-between items-baseline">
          <p class="font-bold">Quantity</p>
          <div class="flex items-center gap-1">
            <button
              class="size-9 rounded-full border-2 border-blue-600 grid place-items-center"
              @click="cartStore.decrease(product.id)"
            >
              <Minus class="text-blue-600 size-4" />
            </button>

            <div
              class="w-10 h-9 rounded-lg bg-indigo-100 grid place-items-center"
            >
              {{ cartItem?.quantity ?? 0 }}
            </div>

            <button
              class="size-9 rounded-full border-2 border-blue-600 grid place-items-center"
              @click="cartStore.increase(product.id)"
            >
              <Plus class="text-blue-600 size-4" />
            </button>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <Button class="bg-gray-200" @click="checked = !checked">
            <Heart
              class="size-5 transition-all"
              :fill="checked ? 'red' : 'none'"
              :color="checked ? 'red' : 'black'"
              :stroke-width="1"
            />
          </Button>
          <Button class="bg-blue-600 px-10" @click="cartStore.add(product)">
            Buy Now
          </Button>
          <Button class="bg-black px-10" @click="cartStore.add(product)">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
