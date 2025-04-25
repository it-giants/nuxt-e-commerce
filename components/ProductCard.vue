<script setup>
const props = defineProps({
  productSlug: {
    type: String
  },

  productTitle: {
    type: String,
  },

  productImage: {
    type: String
  },
});
</script>

<template>
  <NuxtLink :to="`products/${productSlug}`" class="product relative aspect-square flex flex-col" v-bind="$attrs">
    <div class="product__img relative">
      <NuxtImg :src="productImage" class="h-full w-full object-cover"></NuxtImg>
    </div>

    <div class="text-center bg-[var(--primary-color)] px-4 py-2 h-10">
      <p class=" text-white font-bold line-clamp-1">{{ productTitle }}</p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>