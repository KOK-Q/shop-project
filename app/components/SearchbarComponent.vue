<script setup lang="ts">
import { Camera } from "@lucide/vue";

const modelValue = defineModel<string[]>({
  default: [],
});
</script>

<template>
  <TagsInput
    v-model="modelValue"
    class="w-70 h-10 bg-gray-100 rounded-full border-none px-4"
  >
    <TagsInputItem
      v-for="item in modelValue"
      :key="item"
      :value="item"
      class="bg-white rounded-full px-2 text-sm"
    >
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>

    <TagsInputInput placeholder="Search" class="bg-transparent px-1" />

    <Camera class="size-5 text-blue-600" />
  </TagsInput>
</template>
