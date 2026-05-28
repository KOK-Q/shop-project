<script setup lang="ts">
const productStore = useProductStore();
const modelValue = defineModel<string[]>({
  default: [],
});

function toggleCategory(category: string) {
  if (modelValue.value.includes(category)) {
    modelValue.value = modelValue.value.filter((c) => c !== category);
  } else {
    modelValue.value = [...modelValue.value, category];
  }
}
</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="(items, category) in productStore.groupedCategories"
      :key="category"
      class="p-2"
      @click="toggleCategory(category)"
    >
      <div
        v-for="item in items.slice(0, 1)"
        :key="item.id"
        class="rounded-full overflow-hidden bg-white aspect-square p-1.25 border shadow-xl"
        :class="{ 'ring-2 ring-blue-600': modelValue.includes(category) }"
      >
        <img
          :src="item.image"
          :alt="item.category"
          class="w-full h-full object-contain bg-gray-100 rounded-full p-2"
        />
      </div>

      <div class="flex justify-center items-center text-sm">
        <p class="mt-2">
          {{ category }}
        </p>
      </div>
    </div>
  </div>
</template>
