<script setup>
import { useThemeStore } from '@/stores/themeStore.js';
import Header from '~/components/Header.vue';
const themeStore = useThemeStore();
</script>

<template>
  <Header />
  <slot />
</template>

<style lang="scss">
  body.dark {
    background: black;
    color: white;
  }
</style>