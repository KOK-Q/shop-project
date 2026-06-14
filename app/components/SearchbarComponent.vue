<script setup lang="ts">
import { Camera } from "@lucide/vue";

const modelValue = defineModel<string[]>({
  default: [],
});
</script>

<template>
  <TagsInput
    v-model="modelValue"
    class="w-full h-9 bg-gray-100 rounded-full border-none px-3 flex-nowrap overflow-x-auto placeholder:text-placeholder"
  >
    <TagsInputItem
      v-for="item in modelValue"
      :key="item"
      :value="item"
      class="bg-input rounded-full px-2 text-sm shrink-0"
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
