<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

onMounted(() => {
  authStore.setUser();
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});
</script>
