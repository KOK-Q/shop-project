<script setup lang="ts">
import { Camera } from "@lucide/vue";

const modelValue = defineModel<string[]>({
  default: [],
});
</script>

<template>
  <TagsInput
    v-model="modelValue"
    class="w-70 h-10 bg-gray-100 rounded-full border-none px-4 flex-nowrap overflow-x-auto"
  >
    <TagsInputItem
      v-for="item in modelValue"
      :key="item"
      :value="item"
      class="bg-white rounded-full px-2 text-sm shrink-0"
    >
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>

    <TagsInputInput
      placeholder="Search"
      class="bg-transparent px-1 flex-1 min-w-0"
    />

    <Camera class="size-5 text-blue-600" />
  </TagsInput>
</template>
