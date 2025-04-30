<script setup>
import { useThemeStore } from '@/stores/themeStore.js';

const themeStore = useThemeStore();
const router = useRouter();

const isMobile = ref(false);
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 639px)');
  isMobile.value = mediaQuery.matches;

  // Optional: Watch for changes
  const checkMediaQuery = (event) => {
    isMobile.value = event.matches;
  };
  mediaQuery.addEventListener('change', checkMediaQuery);

  onBeforeUnmount(() => {
    mediaQuery.removeEventListener('change', checkMediaQuery);
  });
})

let searchInput = ref('');
function submitSearch() {
  let query = searchInput.value.trim() ? { title: searchInput.value } : undefined;
  router.push({ path: '/products', query });
  searchInput.value = '';

  if (isMenuOpen) {
    isMenuOpen.value = false;
  }
}
</script>

<template>
  <header class="shadow-sm fixed top-0 left-0 right-0 z-10">
    <Container class="header-content flex items-center py-3">
      <div class="logo">
        <NuxtLink to="/">
          <img src="assets/logo.png" class="w-[150px]" />
        </NuxtLink>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="isMenuOpen" class="sm:hidden bg-[#012120] px-4 py-5 absolute top-full left-0 w-full border-t border-t-zinc-600">
        <div v-if="isMenuOpen" class="ms-auto me-5 mb-5">
          <form @submit.prevent="submitSearch" class="flex items-center">
            <input v-model="searchInput" type="text" placeholder="Search for products..."
              class="search-input bg-transparent px-2 py-1 border border-[var(--primary-color)] outline-none" />
          </form>
        </div>

        <ul class="flex flex-col gap-3">
          <li>
            <NuxtLink to="/" @click="isMenuOpen = false">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/categories" @click="isMenuOpen = false">Categories</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" @click="isMenuOpen = false">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/favorites" @click="isMenuOpen = false">Favorites</NuxtLink>
          </li>
        </ul>
      </div>

      <nav class="ms-10 hidden sm:block">
        <ul class="flex gap-3">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/categories">Categories</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/favorites">Favorites</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="ms-auto me-5 hidden sm:block">
        <form @submit.prevent="submitSearch" class="flex items-center">
          <input v-model="searchInput" type="text" placeholder="Search for products..."
            class="search-input bg-transparent px-2 py-1 border border-[var(--primary-color)] outline-none" />
        </form>
      </div>

      <ClientOnly>
        <button @click="themeStore.toggleDark" :class="isMobile ? 'ms-auto' : ''">{{ themeStore.isDark ? 'Light ☀️' : 'Dark 🕶️' }}</button>
        <button @click="toggleMenu" class="sm:hidden text-2xl ms-2">☰</button>
      </ClientOnly>

    </Container>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 70px;
  background: var(--background-color);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
</style>