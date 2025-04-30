import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', () => {
  // Explicitly initialize as a reactive array
  const favorites = ref([]);

  // Check if a product is in favorites
  const isFavorite = (productId) => {
    if (!productId) return false;
    return favorites.value.some(favorite => favorite && favorite.id === productId);
  };

  // Toggle favorite status
  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      // Remove from favorites
      favorites.value = favorites.value.filter(favorite => favorite.id !== product.id);
    } else {
      // Add to favorites
      favorites.value.unshift(product);
    }
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite
  };
}, {
  persist: {
    storage: process.client ? localStorage : null,
    paths: ['favorites'],
  }
});