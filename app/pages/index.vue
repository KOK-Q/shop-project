<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";

const authStore = useAuthStore();

definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="min-h-screen flex flex-col justify-evenly items-center px-6">



    <div class="flex flex-col justify-center items-center">
      <!-- Icon -->
      <div
        class="w-32 h-32 rounded-full shadow-xl flex items-center justify-center mb-10"
      >
        <img src="/images/bag.png" class="w-20 h-20" />
      </div>

      <!-- Title -->
      <h1 class="font-bold text-5xl overflow-hidden mb-4">Shoppe</h1>

      <!-- Subtitle -->
      <p class="text-center text-gray-500">
        Beautiful eCommerce UI Kit<br />
        for your online store
      </p>
    </div>




    <!-- CTA -->
    <div class="w-full space-y-4">
      <NuxtLink to="/signup" class="block">
        <Button
          class="w-full text-lg font-light bg-blue-600 text-white h-13 hover:bg-blue-400 rounded-xl shadow-md active:scale-95 transition"
        >
          Let's get started
        </Button>
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

      <div
        class="flex items-center justify-center gap-2 text-sm"
        @click="authStore.logout()"
      >
        Logout
      </div>
    </div>
  </div>
</template>
