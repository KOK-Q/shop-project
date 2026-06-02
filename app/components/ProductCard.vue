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

function changePage(id: number) {
  navigateTo(`/products/${id}`);
}
</script>

<template>
  <div class="grid gap-2" @click="changePage(product.id)">
    <Card class="rounded-md h-44 shadow-xl">
      <CardContent class="h-42">
        <img
          :src="product.image"
          class="w-full h-full object-contain p-2 rounded-md bg-gray-200"
          loading="lazy"
        />
      </CardContent>
    </Card>
    <p class="text-sm items-start h-10 line-clamp-2">{{ product.title }}</p>
    <p class="font-bold text-lg">${{ product.price }}</p>
    
  </div>
</template>
