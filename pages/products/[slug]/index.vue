<script setup>
import { useProductsStore } from '@/stores/productsStore';

const route = useRoute();
const productsStore = useProductsStore();

await useAsyncData('products', () => productsStore.fetchSingleProduct(route.params.slug));
const { product } = storeToRefs(productsStore);

console.log(product);

</script>

<template>
  <div>

  </div>
</template>

<style lang="scss" scoped></style>