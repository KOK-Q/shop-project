<script setup lang="ts">
definePageMeta({
  layout: false,
});

useHead({
  title: "Signup | MyShop",
  meta: [
    {
      name: "description",
      content: "Sign Up in the website",
    },
  ],
});
</script>

<template>
  <div
    class="relative flex flex-col min-h-screen px-6 gap-10 justify-evenly"
  >
    <!-- Background bubbles -->
    <div>
      <img src="/images/bubble1.png" class="absolute top-0 right-0" alt="" />
      <img src="/images/bubble2.png" class="absolute top-0 left-0" alt="" />
    </div>

    <!-- Content -->
    <div class="relative z-1 flex justify-between flex-col gap-10">
      <!-- Title -->
      <div>
        <h1 class="text-5xl font-bold overflow-hidden">Create Account</h1>
      </div>

      <!-- Upload Avatar -->
      <div>
        <img src="/images/UploadPhoto.png" />
      </div>

      <!-- Form -->
      <div>
        <SignUpForm />
      </div>
    </div>
  </div>
</template>
