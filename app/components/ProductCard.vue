<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

defineProps<{
  product: Product;
}>();

// const emit = defineEmits<{
//   "add-to-cart": [product: Product];
// }>();

function changePage(id: number) {
  navigateTo(`/products/${id}`);
}
</script>

<template>
  <div class="grid gap-2" @click="changePage(product.id)">
    <Card class="rounded-md h-44 shadow-xl">
      <CardContent class="h-44">
        <img
          :src="product.image"
          class="w-full h-full object-contain p-2 rounded-md bg-gray-200"
          loading="lazy"
        />
      </CardContent>
    </Card>
    <p class="text-sm items-start h-10 line-clamp-2">{{ product.title }}</p>
    <p class="font-bold text-lg">${{ product.price }}</p>
    <!-- <div class="flex gap-2 w-full justify-evenly">
      <Button class="bg-blue-600 w-20" @click="emit('add-to-cart', product)">
        buy
      </Button>
      <Button class="bg-gray-500 w-20" @click="changePage(product.id)">
        Details
      </Button>
    </div> -->
  </div>
</template>
