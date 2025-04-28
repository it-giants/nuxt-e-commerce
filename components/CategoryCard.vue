<script setup>
const props = defineProps({
  categorySlug: {
    type: String
  },

  categoryName: {
    type: String,
  },

  categoryImage: {
    type: String
  },
});
</script>

<template>
  <NuxtLink :to="`/categories/slug/${categorySlug}`" class="category relative aspect-square flex justify-center">
    <div class="absolute bottom-4 text-center bg-[rgba(0,0,0,0.5)] px-4 py-2 w-5/6 ">
      <p class=" text-white font-bold line-clamp-1">{{ categoryName }}</p>
    </div>
    <NuxtImg :src="categoryImage" class="w-full h-full object-cover"></NuxtImg>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>