<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";

useHead({
  title: "Login | MyShop",
  meta: [
    {
      name: "description",
      content: "Login to your account",
    },
  ],
});
</script>

<template>
  <div
    class="relative flex min-h-screen flex-col justify-between overflow-hidden pb-6"
  >
    <div>
      <!-- TOP LEFT BLUE -->
      <svg
        class="absolute -top-10 left-0 z-1"
        width="245"
        height="272"
        viewBox="0 0 245 272"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.9996 -131.222C138.438 -261.036 244.435 -41.0359 244.435 70.214C244.435 181.464 154.25 271.65 42.9996 271.65C-68.2502 271.65 -158.436 181.464 -158.436 70.214C-158.436 -41.0359 -52.4385 -1.40715 42.9996 -131.222Z"
          fill="#004BFE"
        />
      </svg>

      <!-- TOP LEFT LIGHT -->
      <svg
        class="absolute -top-10 left-0 z-0"
        width="296"
        height="331"
        viewBox="0 0 296 331"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M201.008 266.33C161.149 422.443 -19.5441 258.17 -61.2191 155.021C-102.894 51.8718 -53.0593 -65.5313 50.0897 -107.206C153.239 -148.881 237.498 -79.7022 282.998 11.2978C328.498 102.298 240.867 110.216 201.008 266.33Z"
          fill="#D9E4FF"
        />
      </svg>

      <!-- RIGHT BLUE -->
      <svg
        class="absolute top-55 right-0 z-1"
        width="69"
        height="137"
        viewBox="0 0 69 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.3153 131.631C-4.48347 158.87 -6.99358 75.524 8.45684 40.8218C23.9072 6.11959 64.564 -9.48707 99.2662 5.96335C133.968 21.4138 149.575 62.0705 134.125 96.7727C118.674 131.475 91.114 104.393 43.3153 131.631Z"
          fill="#004BFE"
        />
      </svg>

      <!-- BOTTOM RIGHT LIGHT -->
      <svg
        class="absolute -bottom-5 right-0 z-2"
        width="236"
        height="310"
        viewBox="0 0 236 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M393.067 235.625C487.036 366.507 245.048 399.333 139.243 364.954C33.438 330.576 -24.4649 216.936 9.91323 111.131C44.2913 5.3258 151.446 -14.7528 250.403 8.88586C349.36 32.5245 299.098 104.743 393.067 235.625Z"
          fill="#F2F5FE"
        />
      </svg>
    </div>

    <!-- CONTENT -->
    <div class="relative z-10 flex flex-col gap-10 px-5">
      <!-- TITLE -->
      <div>
        <h1 class="text-[56px] font-bold">Login</h1>
        <p class="mt-2 text-[18px]">Good to see you back! 🖤</p>
      </div>

      <!-- FORM -->
      <LoginForm/>
    </div>
  </div>
</template>
