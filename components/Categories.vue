<script setup>
import { useCategoriesStore } from '@/stores/categoriesStore';
import Container from './Container.vue';
import Heading from './Heading.vue';

const props = defineProps({
  numberOfCategories: {
    type: Number,
    default: null
  }
});

const categoriesStore = useCategoriesStore();
await useAsyncData('categories', () => categoriesStore.fetchCategories({limit: props.numberOfCategories}));
const { categories } = storeToRefs(categoriesStore);
</script>

<template>
  <section class="categories py-10">
    <Container>
      <Heading class="mb-5 primary-color">Categories</Heading>
      <div class="grid grid-cols-5 gap-8 sm-max:gap-4 sm-max:grid-cols-2 md-max:grid-cols-3">
        <div class="category relative aspect-square flex justify-center" v-for="category in categories">
          <p>{{ category.slug }}</p>
          <div class="absolute bottom-4 text-center bg-[rgba(0,0,0,0.5)] px-4 py-2 w-5/6 ">
            <p class=" text-white font-bold line-clamp-1">{{ category?.name }}</p>
          </div>
          <NuxtImg :src="category?.image" class="w-full h-full object-cover"></NuxtImg>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped></style>