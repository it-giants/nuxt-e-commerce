<script setup>
import Container from './Container.vue';
import { useThemeStore } from '@/stores/themeStore.js';

const themeStore = useThemeStore();
let searchInput = ref('');
const router = useRouter();

function submitSearch() {
  let query = searchInput.value.trim() ? { title: searchInput.value } : undefined;
  router.push({ path: '/products', query });
  searchInput.value = '';
}

// Resolve hydration mismatch
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
})
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

      <div class="ms-auto me-5">
        <form @submit.prevent="submitSearch" class="flex items-center">
          <input
            v-model="searchInput"
            type="text"
            placeholder="Search for products..."
            class="search-input bg-transparent px-2 py-1 border border-[var(--primary-color)] outline-none"
          />
        </form>
      </div> 

      <div>
        <button v-if="mounted" @click="themeStore.toggleDark">{{ themeStore.isDark ? 'Light ☀️' : 'Dark 🕶️' }}</button>
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