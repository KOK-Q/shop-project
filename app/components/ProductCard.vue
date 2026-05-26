<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string
}

defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  "add-to-cart": [product: Product];
}>();

function changePage(id: number) {
  navigateTo(`/products/${id}`);
}
</script>

<template>
  <div class="grid gap-2">
    <Card class="rounded-md h-44 shadow-xl">
      <CardContent>
        <img
          :src="product.image"
          class="h-30 p-1 w-full rounded-md"
          loading="lazy"
        />
      </CardContent>
    </Card>
    <p class="text-sm">{{ product.title }}</p>
    <p class="font-bold text-lg">${{ product.price }}</p>
    <div class="flex gap-2 mt-4">
      <Button class="bg-blue-600" @click="emit('add-to-cart', product)">
        buy
      </Button>
      <Button class="bg-gray-500" @click="changePage(product.id)">
        Details
      </Button>
    </div>
  </div>
</template>
