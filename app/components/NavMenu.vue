<script setup lang="ts">
import { Home, ShoppingBasket, User, Package, Heart } from "@lucide/vue";

const route = useRoute();
</script>

<template>
  <NavigationMenu
    class="fixed bottom-0 left-0 right-0 z-50 border-t bg-white shadow-xl w-screen max-w-none"
  >
    <NavigationMenuList
      class="flex justify-between px-6 py-2 w-screen max-w-none"
    >
      <!-- home -->
      <NavigationMenuItem>
        <NuxtLink to="/" :class="route.path === '/cart' && 'text-blue-600'">
          <Home :class="route.path === '/' ? 'text-black' : 'text-blue-700'" />
        </NuxtLink>
      </NavigationMenuItem>

      <!-- wish list -->
      <NavigationMenuItem>
        <NuxtLink to="/" :class="route.path === '/wishlist' && 'text-blue-600'">
          <Heart
            :class="route.path === '/wishlist' ? 'text-black' : 'text-blue-700'"
          />
        </NuxtLink>
      </NavigationMenuItem>

      <!-- user -->
      <NavigationMenuItem>
        <NuxtLink to="/shop" :class="route.path === '/cart' && 'text-blue-600'">
          <User
            :class="route.path === '/shop' ? 'text-black' : 'text-blue-700'"
          />
        </NuxtLink>
      </NavigationMenuItem>

      <!-- shopping basket -->
      <NavigationMenuItem>
        <NuxtLink to="/cart" :class="route.path === '/cart' && 'text-blue-600'">
          <ShoppingBasket
            :class="route.path === '/cart' ? 'text-black' : 'text-blue-700'"
          />
        </NuxtLink>
      </NavigationMenuItem>

      <!-- products page -->
      <NavigationMenuItem>
        <NuxtLink
          to="/products"
          :class="route.path === '/products' && 'text-blue-600'"
        >
          <Package
            :class="route.path === '/products' ? 'text-black' : 'text-blue-700'"
          />
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
