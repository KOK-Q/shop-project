<script setup lang="ts">
import { required, email } from "@vee-validate/rules";
import { Field as VeeField, defineRule } from "vee-validate";

defineRule("required", required);
defineRule("email", email);

const authStore = useAuthStore();

function onSubmit(value: any) {
  authStore.signup(value);
  navigateTo("/products");
}
</script>

<template>
  <Form @submit="onSubmit(value)">
    <FieldGroup class="grid gap-2">
      <!-- email -->
      <VeeField v-slot="{ field, errors }" name="email" rules="required">
        <Field :data-invalid="!!errors.length">
          <Input
            id="email"
            class="bg-gray-100 h-13 rounded-full border-none"
            v-bind="field"
            placeholder="Email"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <!-- Password -->
      <VeeField v-slot="{ field, errors }" name="password" rules="required">
        <Field :data-invalid="!!errors.length">
          <Input
            id="password"
            class="bg-gray-100 h-13 rounded-full border-none"
            v-bind="field"
            placeholder="Password"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <div class="flex flex-col gap-2">
        <NuxtLink to="/shop">
          <Button type="submit" class="bg-blue-600 w-full h-12 text-lg"
            >Done</Button
          >
        </NuxtLink>

        <NuxtLink to="/">
          <Button
            type="submit"
            class="rounded-full w-full flex justify-center bg-white text-black"
          >
            Cancel
          </Button>
        </NuxtLink>
      </div>
    </FieldGroup>
  </Form>
</template>
