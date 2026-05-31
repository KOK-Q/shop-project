<script setup lang="ts">
const productStore = useProductStore();

interface Product {
  title: string;
  price: number;
  image: string;
}

function onSubmit(values: Product) {
  productStore.products.push({
    id: 1,
    category: "",
    description: "",
    ...values,
  });
}
</script>

<template>
  <Form @submit="(values) => onSubmit(values as Product)">
    <FieldGroup class="grid justify-center p-12">
      <h1 class="font-bold text-2xl">New product</h1>
      <div class="bg-gray-100 w-100 border p-8 grid gap-2">
        <!-- Title -->
        <VeeField v-slot="{ field, errors }" name="title" rules="required">
          <Field :data-invalid="!!errors.length">
            <FieldLabel for="title"> Title: </FieldLabel>
            <Input
              id="title"
              v-bind="field"
              placeholder="Enter the title"
              autocomplete="off"
              :aria-invalid="!!errors.length"
            />
            <FieldError v-if="errors.length" :errors="errors" />
          </Field>
        </VeeField>

        <!-- price -->
        <VeeField v-slot="{ field, errors }" name="price" rules="required">
          <Field :data-invalid="!!errors.length">
            <FieldLabel for="price"> Price </FieldLabel>
            <Input
              id="price"
              v-bind="field"
              placeholder="Enter the price"
              autocomplete="off"
              :aria-invalid="!!errors.length"
            />
            <FieldError v-if="errors.length" :errors="errors" />
          </Field>
        </VeeField>

        <!-- img URL -->
        <VeeField v-slot="{ field, errors }" name="img" rules="required">
          <Field :data-invalid="!!errors.length">
            <FieldLabel for="img"> Image URL </FieldLabel>
            <Input
              id="img"
              v-bind="field"
              placeholder="Enter the img URL"
              autocomplete="off"
              :aria-invalid="!!errors.length"
            />
            <FieldError v-if="errors.length" :errors="errors" />
          </Field>
        </VeeField>

        <!-- description -->
        <VeeField
          v-slot="{ field, errors }"
          name="description"
          rules="required"
        >
          <Field :data-invalid="!!errors.length">
            <FieldLabel for="description"> Description </FieldLabel>
            <Input
              id="description"
              v-bind="field"
              placeholder="Enter the description"
              autocomplete="off"
              :aria-invalid="!!errors.length"
            />
            <FieldError v-if="errors.length" :errors="errors" />
          </Field>
        </VeeField>

        <Button type="submit" @click="productStore.products"
          >Save Product</Button
        >
      </div>
    </FieldGroup>
  </Form>
</template>
