<script setup>
import { useFavoritesStore } from '~/stores/favoriteStore';
import Container from '~/components/Container.vue';
import Heading from '~/components/Heading.vue';
import ProductCard from '~/components/ProductCard.vue';

const favoritesStore = useFavoritesStore();
const favorites = computed(() => favoritesStore.favorites);

const hydrated = ref(false);
onMounted(() => {
  hydrated.value = true;
});

// Page meta
useHead({
  title: 'Favorites',
  meta: [
    { name: 'description', content: 'Your favorite products' }
  ]
});
</script>

<template>
  <Container class="container mx-auto py-8 px-4">
    <Heading class="mb-5 primary-color">Favorites</Heading>
    
    <div v-if="hydrated">
      <div v-if="favorites.length === 0" class="text-center py-16">
        <h2 class="text-2xl font-semibold text-gray-500 mb-4">Your favorites list is empty</h2>
        <p class="text-gray-400 mb-6">Add products to your favorites by clicking the heart icon on products you love</p>
        <NuxtLink to="/products" class="bg-[var(--primary-color)] text-white px-6 py-3 rounded-md hover:opacity-90 inline-block">
          Browse Products
        </NuxtLink>
      </div>
      
      <div v-else class="grid grid-cols-5 gap-8 sm-max:gap-4 sm-max:grid-cols-2 lg-max:grid-cols-4">
        <ProductCard 
            v-for="product in favorites"
            :key="product.id"
            :product="product"
        />
      </div>
    </div>
  </Container>
</template>