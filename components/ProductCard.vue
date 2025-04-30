<script setup>
import { useFavoritesStore } from '~/stores/favoriteStore';

const favoritesStore = useFavoritesStore();

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const productId = computed(() => props.product.id);
const productSlug = computed(() => props.product.slug);
const productTitle = computed(() => props.product.title);
const productImage = computed(() => props.product.images?.[0] || '');
const productPrice = computed(() => props.product.price || 0);
const productDescription = computed(() => props.product.description || '');

// Method to toggle favorite status
const toggleFavorite = (event) => {
  // Prevent navigation when clicking the heart icon
  event.stopPropagation();
  
  // Use the full product object if available, otherwise construct one
  const productToToggle = props.product.id ? 
    props.product : 
    {
      id: productId,
      title: productTitle,
      price: productPrice,
      description: productDescription,
      images: [productImage],
      slug: productSlug
    };
  
  favoritesStore.toggleFavorite(productToToggle);
};

// Computed property to check if product is in favorites
const isFavorite = computed(() => favoritesStore.isFavorite(productId.value));
</script>

<template>
  <div class="border rounded-lg overflow-hidden shadow-md relative">
    <NuxtLink :to="`/products/slug/${productSlug}`" class="product relative aspect-square flex flex-col" v-bind="$attrs">
      <div class="product__img relative h-full">
        <NuxtImg :src="productImage" class="h-full w-full object-cover" loading="lazy"></NuxtImg>
      </div>
  
      <ClientOnly>
        <button 
        @click.stop.prevent="toggleFavorite"
        class="absolute top-2 right-2 z-[2] bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200"
        aria-label="Toggle favorite"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5" 
            :class="{ 'text-red-500 fill-red-500': isFavorite, 'text-gray-400': !isFavorite }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
        </button>
      </ClientOnly>
      
      <div class="p-4">
        <h3 class="font-bold text-lg mb-2 line-clamp-1">{{ productTitle }}</h3>
        <p class="font-semibold text-[var(--primary-color)]">${{ productPrice }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>