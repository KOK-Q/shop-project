<script setup lang="ts">
const productStore = useProductStore();
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <Card
      v-for="(items, category) in productStore.groupedCategories"
      :key="category"
      class="p-2"
    >
      <CardContent class="grid grid-cols-2 gap-2 p-0">
        <div
          v-for="item in items.slice(0,4)"
          :key="item.id"
          class="rounded-md overflow-hidden bg-gray-100 aspect-square"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-contain p-2"
          />
        </div>
      </CardContent>

      <CardFooter class="flex justify-between items-center px-0 pb-0">
        <p class="font-bold capitalize">
          {{ category }}
        </p>

        <span
          class="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-md"
        >
          {{ items.length }}
        </span>
      </CardFooter>
    </Card>
  </div>
</template>