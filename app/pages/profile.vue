<script setup lang="ts">
import {
  User,
  Mail,
  ShoppingBag,
  Heart,
  LogOut,
  ChevronRight,
  Pencil,
  Check,
  X,
} from "@lucide/vue";

definePageMeta({
  middleware: "auth",
});

const authStore = useAuthStore();
const cartStore = useCartStore();
const wishStore = useWishStore();

// ---------------------------------------------------------------------------
// Display name — derived from email, editable, stored in localStorage
// ---------------------------------------------------------------------------
const storedName = import.meta.client
  ? (localStorage.getItem("displayName") ?? "")
  : "";

const displayName = ref(
  storedName || authStore.user?.email?.split("@")[0] || "User",
);
const editingName = ref(false);
const nameInput = ref(displayName.value);

function startEdit() {
  nameInput.value = displayName.value;
  editingName.value = true;
}

function saveName() {
  const trimmed = nameInput.value.trim();
  if (trimmed) {
    displayName.value = trimmed;
    localStorage.setItem("displayName", trimmed);
  }
  editingName.value = false;
}

function cancelEdit() {
  editingName.value = false;
}

// ---------------------------------------------------------------------------
// Derived stats
// ---------------------------------------------------------------------------
const cartCount = computed(() => cartStore.cartCount);
const wishCount = computed(() => wishStore.wish.length);
const totalSpent = computed(() => cartStore.totalPrice.toFixed(2));

// ---------------------------------------------------------------------------
// Avatar initial
// ---------------------------------------------------------------------------
const initial = computed(() => displayName.value.charAt(0).toUpperCase());
</script>

<template>
  <div class="min-h-screen px-5 pt-6 space-y-6">
    <!-- ── Avatar + Name ──────────────────────────────────────────────── -->
    <div class="flex flex-col items-center gap-3 pt-4">
      <!-- Avatar circle -->
      <div
        class="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-lg"
      >
        <span class="text-white text-4xl font-bold select-none">
          {{ initial }}
        </span>
      </div>

      <!-- Editable display name -->
      <div class="flex items-center gap-2">
        <template v-if="!editingName">
          <h1 class="text-2xl font-bold">{{ displayName }}</h1>
          <Button
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition active:scale-95"
            aria-label="Edit display name"
            @click="startEdit"
          >
            <Pencil class="size-4.5 text-gray-500" />
          </Button>
        </template>

        <template v-else>
          <Input
            v-model="nameInput"
            class="text-2xl font-bold border-b-2 border-b-blue-600 w-46 text-center"
            autofocus
            maxlength="36"
            @keyup.enter="saveName"
            @keyup.escape="cancelEdit"
          />
          <Button
            class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center active:scale-95"
            aria-label="Save name"
            @click="saveName"
          >
            <Check class="size-5 text-white" />
          </Button>
          <Button
            class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center active:scale-95"
            aria-label="Cancel"
            @click="cancelEdit"
          >
            <X class="size-5 text-gray-500" />
          </Button>
        </template>
      </div>

      <!-- Email -->
      <p class="text-sm text-gray-400 flex items-center gap-1.5">
        <Mail class="size-3.5" />
        {{ authStore.user?.email }}
      </p>
    </div>

    <!-- ── Stats cards ─────────────────────────────────────────────────── -->
    <div class="grid grid-cols-3 gap-3">
      <NuxtLink
        to="/cart"
        class="bg-indigo-50 rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition"
      >
        <ShoppingBag class="text-blue-600 size-8" />
        <span class="text-xl font-bold text-blue-600">{{ cartCount }}</span>
        <span class="text-sm text-gray-500">In cart</span>
      </NuxtLink>

      <NuxtLink
        to="/wishlist"
        class="bg-pink-50 rounded-2xl p-4 flex flex-col items-center gap-2 active:scale-95 transition"
      >
        <Heart class="text-pink-500 size-8" />
        <span class="text-xl font-bold text-pink-500">{{ wishCount }}</span>
        <span class="text-sm text-gray-500">Wishlisted</span>
      </NuxtLink>

      <div class="bg-green-50 rounded-2xl p-4 flex flex-col items-center gap-2">
        <span class="text-green-600 text-3xl">$</span>
        <span class="text-xl font-bold text-green-600">${{ totalSpent }}</span>
        <span class="text-sm text-gray-500">Cart total</span>
      </div>
    </div>

    <!-- ── Account section ────────────────────────────────────────────── -->
    <div class="space-y-2">
      <h2
        class="text-sm font-semibold text-gray-400 uppercase tracking-wide px-1"
      >
        Account
      </h2>

      <div
        class="bg-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-200"
      >
        <!-- Account info row -->
        <div class="flex items-center gap-4 p-4">
          <div
            class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"
          >
            <User class="text-blue-600 size-5" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-semibold truncate">{{ displayName }}</p>
            <p class="text-xs text-gray-500 truncate">
              {{ authStore.user?.email }}
            </p>
          </div>
        </div>

        <!-- My Cart (orders) -->
        <NuxtLink
          to="/cart"
          class="flex items-center gap-4 p-4 hover:bg-gray-200 transition active:bg-gray-200"
        >
          <div
            class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center"
          >
            <ShoppingBag class="text-indigo-600 size-5" />
          </div>
          <span class="flex-1 font-medium">My Cart</span>
          <ChevronRight class="text-gray-400 size-4" />
        </NuxtLink>

        <!-- Wishlist -->
        <NuxtLink
          to="/wishlist"
          class="flex items-center gap-4 p-4 hover:bg-gray-200 transition active:bg-gray-200"
        >
          <div
            class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center"
          >
            <Heart class="text-pink-500 size-5" />
          </div>
          <span class="flex-1 font-medium">Wishlist</span>
          <ChevronRight class="text-gray-400 size-4" />
        </NuxtLink>
      </div>
    </div>

    <!-- ── Logout ──────────────────────────────────────────────────────── -->
    <button
      class="w-full flex items-center justify-center gap-2 bg-red-50 text-red-500 rounded-2xl py-4 font-semibold hover:bg-red-100 active:scale-95 transition"
      @click="authStore.logout()"
    >
      <LogOut class="size-5" />
      Log out
    </button>
  </div>
</template>
