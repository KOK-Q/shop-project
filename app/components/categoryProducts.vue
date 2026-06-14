<script setup lang="ts">
const productStore = useProductStore();
</script>

<template>
  <div class="grid grid-cols-2 gap-1">
    <Card
      v-for="(items, category) in productStore.groupedCategories"
      :key="category"
      class="px-1.5 border border-t-0 shadow-lg"
    >
      <CardContent class="grid grid-cols-2 gap-1 p-0">
        <div
          v-for="item in items.slice(0, 4)"
          :key="item.id"
          class="rounded-md overflow-hidden bg-gray-200 aspect-square"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-contain p-1"
          />
        </div>
      </CardContent>

      <CardFooter class="flex justify-between items-center">
        <p class="font-bold text-[13px] capitalize">
          {{ category }}
        </p>

        <span class="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-md">
          {{ items.length }}
        </span>
      </CardFooter>
    </Card>
  </div>
</template>
