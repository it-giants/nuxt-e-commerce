import {defineStore} from 'pinia';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([]);
  const singleCategory = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  let _limit;

  const fetchCategories = async ({limit} = {}) => {
    limit ? _limit = `?limit=${limit}` : _limit = '';

    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await useFetch(`https://api.escuelajs.co/api/v1/categories${_limit}`);
      categories.value = data.value || [];
      return categories.value;
    }
    
    catch (err) {
      error.value = err;
      console.log(err);
      return[];
    }
    finally {
      isLoading.value = false;
    }
  }

  const fetchSingleCategory = async(categorySlug) => {
    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await useFetch(`https://api.escuelajs.co/api/v1/categories/slug/${categorySlug}`);      
      singleCategory.value = data.value;      
      return singleCategory.value;
    }
    
    catch (err) {
      error.value = err;
      console.log(err);
      return[];
    }

    finally {
      isLoading.value = false;
    }
  }

  return {
    categories,
    singleCategory,
    isLoading,
    error,
    fetchCategories,
    fetchSingleCategory
  }
})