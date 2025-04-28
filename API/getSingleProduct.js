import { useProductsStore } from "@/stores/productsStore";

export const getSingleProduct = async (slug) => {
    const route = useRoute();
    const productsStore = useProductsStore();

    await useAsyncData("singleProduct", () => {
        return productsStore.fetchSingleProduct(route.params.slug);
    });

    const { singleProduct } = storeToRefs(productsStore);
    return singleProduct;
};
