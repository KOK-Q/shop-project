<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div class="p-4">
    <h1 class="font-bold text-2xl">Products</h1>
    <ProductList />
  </div>
</template>
