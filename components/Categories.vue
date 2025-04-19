<script setup>
import { useCategoriesStore } from '@/stores/categoriesStore';

const categoriesStore = useCategoriesStore();

await useAsyncData('categories', () => categoriesStore.fetchCategories());

const { categories, isLoading } = storeToRefs(categoriesStore);

</script>

<template>
  <div class="grid">
    <div class="category" v-for="category in categories">
      <p>{{ category.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>