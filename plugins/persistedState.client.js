import { createPersistedState } from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin(({ $pinia }) => {
  // Add the persistedState plugin to Pinia
  $pinia.use(createPersistedState({
    storage: localStorage,
    key: id => `nuxt-e-commerce-${id}`, // Prefixing keys to avoid conflicts
  }));
});