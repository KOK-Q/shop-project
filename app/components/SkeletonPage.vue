<script setup lang="ts"></script>

<template>
  <div class="w-full rounded-md border border-blue-300 p-4">
    <div class="flex animate-pulse space-x-4">
      <div class="flex-1 space-y-3 py-1">
        <!--name-->
        <div class="h-3 rounded bg-gray-200"></div>

        <!-- image -->
        <div class="size-30 rounded-full bg-gray-200 place-self-center"></div>
        <div class="space-y-3">
          <!-- price -->
          <div class="h-2 w-10 rounded bg-gray-200"></div>

          <!-- id -->
          <div class="h-2 w-10 rounded bg-gray-200"></div>

          <!-- buttons -->
          <div class="grid grid-cols-2 gap-4">
            <div class="h-8 rounded bg-gray-200"></div>
            <div class="h-8 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
