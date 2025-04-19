<script setup>
import Container from './Container.vue';
import { useThemeStore } from '@/stores/themeStore.js';
const themeStore = useThemeStore();

</script>

<template>
  <header class="shadow-sm">
    <Container class="header-content flex items-center py-3">
      <div class="logo">
        <img src="assets/logo.png" class="w-[150px]" />
      </div>
    
      <nav class="ms-10">
        <ul class="flex gap-3">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="#">Categories</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>

      <div class="ms-auto">
        <button @click="themeStore.toggleDark">Toggle Dark</button>
      </div>
    </Container>
  </header>
</template>

<style lang="scss">
header {
  height: 70px;
}
</style>