import { useCategoriesStore } from '@/stores/categoriesStore';

export const getSingleCategory = async (slug) => {
  const categoriesStore = useCategoriesStore();
  await useAsyncData('categories', () => categoriesStore.fetchSingleCategory(slug));
  const { singleCategory } = storeToRefs(categoriesStore);  
  return singleCategory
}