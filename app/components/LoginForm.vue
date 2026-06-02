<script setup lang="ts">
import { required, email } from "@vee-validate/rules";
import { Field as VeeField, defineRule } from "vee-validate";

defineRule("required", required);
defineRule("email", email);

interface User {
  email: string;
  password: string;
}

const loading = ref(false);
const authStore = useAuthStore();
const productStore = useProductStore();

async function onSubmit(value: User) {
  console.log("start");
  loading.value = true;
  console.log("loading =", loading.value);

  try {
    const success = authStore.login(value);
    if (success) {
      await productStore.fetchProducts();
      await navigateTo("/products");
    }
  } finally {
    loading.value = false;
    console.log("finally");
  }
}
</script>

<template>
  <Form @submit="(value) => onSubmit(value as User)">
    <!-- email -->
    <FieldGroup class="grid gap-2">
      <VeeField v-slot="{ field, errors }" name="email" rules="required">
        <Field :data-invalid="!!errors.length" class="py-2 px-1">
          <Input
            id="email"
            class="bg-gray-100 h-13 rounded-full border-none"
            v-bind="field"
            placeholder="Enter your email"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <!-- password -->
      <VeeField v-slot="{ field, errors }" name="password" rules="required">
        <Field :data-invalid="!!errors.length" class="py-2 px-1">
          <Input
            id="password"
            type="password"
            class="bg-gray-100 h-13 rounded-full border-none"
            v-bind="field"
            placeholder="Enter your password"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <!-- submit buttons -->
      <div class="flex flex-col gap-2 pb-6">
        <Button
          type="submit"
          :disabled="loading"
          class="bg-blue-600 w-full rounded-xl py-6 text-lg overflow-hidden active:scale-95 transition hover:bg-blue-500"
        >
          <Spinner v-if="loading" />
          {{ loading ? "Please wait..." : "Next" }}</Button
        >

        <NuxtLink to="/">
          <Button
            type="submit"
            class="w-full rounded-xl bg-white py-6 text-black overflow-hidden hover:bg-gray-200"
          >
            Cancel
          </Button>
        </NuxtLink>
      </div>
    </FieldGroup>
  </Form>
</template>
