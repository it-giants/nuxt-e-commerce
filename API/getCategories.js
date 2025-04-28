import { useCategoriesStore } from '@/stores/categoriesStore';

export const getCategories = async (_limit) => {
  const categoriesStore = useCategoriesStore();
  await useAsyncData('categories', () => categoriesStore.fetchCategories({ limit: _limit }));
  const { categories } = storeToRefs(categoriesStore);
  return categories
}
