import {defineStore} from 'pinia';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);
  const singleProduct = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  let _limit;
  let _category;
  let _searchQuery;

  const fetchProducts = async ({limit, category, searchQuery} = {}) => {    
    isLoading.value = true;
    error.value = null;
    limit ? _limit = `limit=${limit}` : _limit = '';
    category ? _category = `categorySlug=${category}` : _category = '';
    searchQuery ? _searchQuery = `title=${searchQuery}` : _searchQuery = '';
    
    try {
      const { data } = await useFetch(`https://api.escuelajs.co/api/v1/products?${_category}&${_limit}&offset=0&${_searchQuery}`);
      products.value = data.value || [];
      return products.value;
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

  const fetchSingleProduct = async (productSlug) => {    
    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await useFetch(`https://api.escuelajs.co/api/v1/products/slug/${productSlug}`);      
      singleProduct.value = data.value;
      return singleProduct.value;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    products,
    singleProduct,
    isLoading,
    error,
    fetchProducts,
    fetchSingleProduct
  }
})