<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center items-center px-6">
    <div class="flex flex-col justify-center items-center">
      <!-- Icon -->
      <div
        class="w-32 h-32 rounded-full shadow-md flex items-center justify-center mb-6"
      >
        <img src="/images/bag.png" class="w-20 h-20" />
      </div>

      <!-- Title -->
      <h1 class="font-bold text-4xl overflow-hidden">Shoppe</h1>

      <!-- Subtitle -->
      <p class="text-center text-gray-500">
        Beautiful eCommerce UI Kit<br />
        for your online store
      </p>
    </div>

    <!-- CTA -->
    <div class="w-full mt-30 space-y-4">
      <NuxtLink to="/signup" class="block">
        <button
          class="w-full bg-blue-600 text-white py-3 rounded-xl font-medium shadow-md active:scale-95 transition"
        >
          Let's get started
        </button>
      </NuxtLink>

      <!-- Login row -->
      <div class="flex items-center justify-center gap-2 text-gray-500 text-sm">
        <span>I already have an account</span>

        <NuxtLink to="/login" class="flex items-center justify-center">
          <div
            class="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full hover:bg-gray-200 transition"
          >
            <ArrowRight class="text-white" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
