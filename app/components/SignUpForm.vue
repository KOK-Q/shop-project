<script setup lang="ts">
import { Eye, EyeClosed } from "@lucide/vue";
import { required, email } from "@vee-validate/rules";
import { Field as VeeField, defineRule } from "vee-validate";

defineRule("required", required);
defineRule("email", email);

interface User {
  email: string;
  password: string;
}

const checked = ref(false);
const authStore = useAuthStore();

function onSubmit(value: User) {
  const success = authStore.signup(value);
  if (success) {
    navigateTo("/shop");
  }
}
</script>

<template>
  <Form @submit="(value) => onSubmit(value as User)">
    <FieldGroup class="grid gap-3">
      <!-- email -->
      <VeeField v-slot="{ field, errors }" name="email" rules="required">
        <Field :data-invalid="!!errors.length" class="py-2 px-1">
          <Input
            id="email"
            type="email"
            class="bg-gray-100 h-13 rounded-full border-none"
            v-bind="field"
            placeholder="Email"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <!-- password -->
      <VeeField v-slot="{ field, errors }" name="password" rules="required">
        <Field :data-invalid="!!errors.length" class="py-2 px-1">
          <InputGroup class="bg-gray-100 h-13 rounded-full border-none">
            <InputGroupInput
              id="password"
              :type="checked ? 'text' : 'password'"
              v-bind="field"
              placeholder="Password"
              autocomplete="off"
              :aria-invalid="!!errors.length"
            />
            <InputGroupAddon align="inline-end" @click="checked = !checked">
              <Eye v-if="checked" />
              <EyeClosed v-else />
            </InputGroupAddon>
          </InputGroup>
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <!-- Number -->
      <VeeField v-slot="{ field, errors }" name="number" rules="required">
        <Field :data-invalid="!!errors.length" class="py-2 px-1">
          <Input
            id="number"
            type="number"
            class="bg-gray-100 h-13 rounded-full border-none"
            v-bind="field"
            placeholder="Number"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" class="py-2 px-1" />
        </Field>
      </VeeField>

      <div class="flex flex-col gap-2">
        <Button
          type="submit"
          class="bg-blue-600 w-full rounded-xl h-12 text-lg active:scale-95 transition hover:bg-blue-500"
          >Done</Button
        >
        <NuxtLink to="/">
          <Button
            type="submit"
            class="w-full flex justify-center h-12 bg-white text-black hover:bg-gray-200"
          >
            Cancel
          </Button>
        </NuxtLink>
      </div>
    </FieldGroup>
  </Form>
</template>
