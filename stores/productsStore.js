import {defineStore} from 'pinia';

export const useProductsStore = defineStore('products', () => {
  const products = ref([]);
  const singleProduct = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchProducts = async ({limit} = {}) => {
    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await useFetch(`https://api.escuelajs.co/api/v1/products`);
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
    console.log(productSlug);
    
    isLoading.value = true;
    error.value = null;

    try {
      const { data } = await useFetch(`https://api.escuelajs.co/api/v1/products/slug/${productSlug}`);
      console.log(data.value);
      
      singleProduct.value = data.value || [];      
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