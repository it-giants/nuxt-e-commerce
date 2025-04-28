<script setup>
const props = defineProps({
  path: {
    type: String,
  },

  pathName: {
    type: String
  },

  currentPathName: {
    type: String
  }
});

</script>

<template>
  <div class="breadcrumb my-5">
    <NuxtLink to="/">Home</NuxtLink> &nbsp;>&nbsp; 
    <NuxtLink :to="path">{{ pathName }}</NuxtLink> &nbsp;>&nbsp; 
    <span class="text-[var(--primary-color)]">{{ currentPathName }}</span>
  </div>
</template>

<style lang="scss" scoped>

</style>