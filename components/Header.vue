<script setup>
import Container from './Container.vue';
import { useThemeStore } from '@/stores/themeStore.js';

const themeStore = useThemeStore();
</script>

<template>
  <header class="shadow-sm fixed top-0 left-0 right-0 z-10">
    <Container class="header-content flex items-center py-3">
      <div class="logo">
        <NuxtLink to="/">
          <img src="assets/logo.png" class="w-[150px]" />
        </NuxtLink>
      </div>
    
      <nav class="ms-10">
        <ul class="flex gap-3">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/categories">Categories</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>

      <div class="ms-auto">
        <button @click="themeStore.toggleDark">Toggle {{ themeStore.isDark ? 'Light' : 'Dark' }}</button>
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 70px;
  background: var(--background-color);
  border-bottom: 2px solid rgba(255,255,255,0.1);
}
</style>