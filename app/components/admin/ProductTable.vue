<script setup lang="ts">
import ProductRow from "./ProductRow.vue";
const productStore = useProductStore()


</script>

<template>
  <Table>
    <TableCaption>A list of your Products.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-40"> Number </TableHead>
        <TableHead>Product Title</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Image</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      <ProductRow
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
      />
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableCell colspan="3"> Total </TableCell>
        <TableCell class="text-right"> $2,500.00 </TableCell>
      </TableRow>
    </TableFooter>
  </Table>
</template>
