import { useProductsStore } from '@/stores/productsStore';

export const getProducts = async () => {
  const productsStore = useProductsStore();
  await useAsyncData('products', () => productsStore.fetchProducts());
  const { products } = storeToRefs(productsStore);
  
  const validProducts = computed(() =>
    products.value.filter((product) => !!product?.slug)
  );
  
  return validProducts
}
