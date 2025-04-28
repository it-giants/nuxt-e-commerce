<script setup>
import { getProducts } from '~/API/getProducts';
import ProductCard from '~/components/ProductCard.vue'
import Container from '~/components/Container.vue';
import Heading from '~/components/Heading.vue';

const products = await getProducts();
</script>

<template>
    <section class="categories py-10">
        <Container>
            <Heading class="mb-5 primary-color">Products</Heading>

            <div v-if="products && products?.length" class="grid grid-cols-5 gap-8">
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