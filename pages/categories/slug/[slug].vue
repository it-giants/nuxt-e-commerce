<script setup>
import Container from '~/components/Container.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import { useProductsStore } from '#imports';
import { useCategoriesStore } from '#imports';
import Heading from '~/components/Heading.vue';

const route = useRoute();

// Fetch Single Category
const { fetchSingleCategory } = useCategoriesStore();
const { data: singleCategory } = await useAsyncData('singleCategory', () => fetchSingleCategory(route.params.slug));

// Fetch Related Products to current category
const { fetchProducts } = useProductsStore();
const { data: products} = await useAsyncData('products-category', () => fetchProducts({category: route.params.slug}));
</script>

<template>
  <Container>
    <BreadCrumb :path="`/categories`" :pathName="`categories`" :currentPathName="singleCategory?.name" />

    <div v-if="singleCategory">
      <div class="grid grid-cols-2 md-max:flex md-max:flex-col gap-8">
        <div>
          <NuxtImg :src="singleCategory?.image" class="aspect-square w-full h-full" />
        </div>
  
        <div class="flex flex-col gap-8">
          <Heading tag="h1">{{ singleCategory?.name }}</Heading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel eum labore sint totam porro architecto, explicabo adipisci itaque et? Nobis impedit architecto, facilis nemo animi autem consectetur nam nesciunt provident eum! Dolorem corporis labore aliquam, harum unde fugit corrupti cupiditate esse dolores quia incidunt nostrum eos aperiam natus eligendi minus vitae provident cumque voluptas aliquid nam perspiciatis beatae! Nulla suscipit quia corporis accusamus? Porro doloribus natus vel maxime quia exercitationem eos illo labore inventore libero odio dolorem, adipisci harum quam enim eligendi assumenda. Necessitatibus, dolorum dolores dignissimos ducimus reprehenderit iusto, perspiciatis quos hic, odit sunt quaerat eum aut fuga.</p>
        </div>
      </div>

      <div class="current-category-products my-10">
        <Heading v-if="products && products?.length" class="text-[var(--primary-color)] mb-6">More Products in {{ singleCategory?.name }}</Heading>
        <div v-if="products && products?.length" class="grid grid-cols-5 gap-8">
            <ProductCard 
                v-if="products"
                v-for="product in products"
                :key="product?.id"
                :product-slug="product?.slug" 
                :product-title="product?.title" 
                :product-image="product?.images[0]" 
            />
        </div>
      </div>
  
    </div>
  </Container>
</template>

<style lang="scss" scoped>

</style>