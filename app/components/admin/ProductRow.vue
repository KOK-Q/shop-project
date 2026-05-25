<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const productStore = useProductStore();
</script>

<template>
  <TableRow>
    <TableCell class="font-medium">
      {{ product.id }}
    </TableCell>

    <TableCell>{{ product.title }}</TableCell>
    <TableCell>{{ product.price }}</TableCell>
    <TableCell class="text-right">
      <img :src="product.image" class="w-10 h-10 object-cover" />
    </TableCell>
    <TableCell>
      <Button class="bg-red-500" @click="productStore.delete(product.id)"
        >delete</Button
      >
    </TableCell>
    <TableCell>
      <NuxtLink :to="`/products/${product.id}`">
        <Button class="bg-green-500">edit</Button>
      </NuxtLink>
    </TableCell>
  </TableRow>
</template>
