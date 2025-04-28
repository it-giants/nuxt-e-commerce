<script setup>
import { useProductsStore } from '#imports';
import ProductCard from '~/components/ProductCard.vue'
import Container from '~/components/Container.vue';
import Heading from '~/components/Heading.vue';

useHead({
    title: 'Products',
});

const { fetchProducts } = useProductsStore();
const { data: products} = await useAsyncData('products', () => fetchProducts());
</script>

<template>
    <section class="categories py-10">
        <Container>
            <Heading class="mb-5 primary-color">Products</Heading>

            <div v-if="products && products?.length" class="grid grid-cols-5 gap-8 sm-max:gap-4 sm-max:grid-cols-2 md-max:grid-cols-3">
                <ProductCard 
                    v-for="product in products"
                    :key="product.id"
                    :product-slug="product?.slug" 
                    :product-title="product?.title" 
                    :product-image="product?.images[0]" 
                />
            </div>
            <!-- <Products :numberOfProducts=5 /> -->
        </Container>
    </section>
</template>

<style lang="scss" scoped></style>