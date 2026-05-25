export default defineNuxtRouteMiddleware(() => {
  const userStore = useAuthStore();

  userStore.setUser();
  if (!userStore.isAuthenticated) {
    return navigateTo("/login");
  }
});
