<script setup>
import ProductCard from '~/components/ProductCard.vue'
import Container from '~/components/Container.vue';

import { useProductsStore } from '@/stores/productsStore';

const productsStore = useProductsStore();

await useAsyncData('products', () => productsStore.fetchProducts());
const { products } = storeToRefs(productsStore);
console.log(products.value);

</script>

<template>
    <section class="categories py-10">
        <Container>
            <Heading class="mb-5 primary-color">Products</Heading>

            <div class="grid grid-cols-5 gap-8">
                <ProductCard v-for="product in products" :product-slug="product?.slug" :product-title="product?.title" :product-image="product?.images[0]" />
            </div>
            <!-- <Products :numberOfProducts=5 /> -->
        </Container>
    </section>
</template>

<style lang="scss" scoped></style>