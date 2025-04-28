<script setup>
import { useProductsStore } from '#imports';
import ProductCard from '~/components/ProductCard.vue'
import Container from '~/components/Container.vue';
import Heading from '~/components/Heading.vue';

useHead({
    title: 'Products',
});

const route = useRoute();
const titleQuery = computed(() => route.query.title || ' ');

const { fetchProducts } = useProductsStore();
const { data: products, refresh } = await useAsyncData(`products-${titleQuery.value}`, () => fetchProducts({searchQuery: titleQuery.value}));

// Watch for query changes and refresh data
watch(() => titleQuery.value, () => {
    refresh();
  }
);
</script>

<template>
    <section class="categories py-8">
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
            
            <!-- I intended to use inline JavaScript to practice different ways of doing something -->
             <div v-if="products.length < 1">
                <span>No Product Were Found... </span>
                <span class="underline font-bold cursor-pointer ps-1" @click="$router.replace('/products'); ">Reload Page</span>
             </div>
            
        </Container>
    </section>
</template>

<style lang="scss" scoped></style>