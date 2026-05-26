<script setup lang="ts">
import { required, email } from "@vee-validate/rules";
import { Field as VeeField, defineRule } from "vee-validate";

defineRule("required", required);
defineRule("email", email);

const authStore = useAuthStore();

function onSubmit(value: any) {
  const success = authStore.login(value);
  if (success) {
    navigateTo("/products");
  }
}
</script>

<template>
  <Form @submit="onSubmit">
    <!-- email -->
    <FieldGroup class="grid gap-2">
      <VeeField v-slot="{ field, errors }" name="email" rules="required">
        <Field :data-invalid="!!errors.length">
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
        <Field :data-invalid="!!errors.length">
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
          class="bg-blue-600 w-full rounded-xl flex justify-center py-6 text-lg"
          >Next</Button
        >

        <NuxtLink to="/">
          <Button
            type="submit"
            class="w-full flex rounded-xl justify-center bg-white py-6 text-black"
          >
            Cancel
          </Button>
        </NuxtLink>
      </div>
    </FieldGroup>
  </Form>
</template>
