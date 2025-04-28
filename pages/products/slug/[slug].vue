<script setup>
import { useProductsStore } from '#imports';
import Container from '~/components/Container.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import BreadCrumb from '~/components/BreadCrumb.vue';

const route = useRoute();
const { fetchSingleProduct } = useProductsStore();
const { data: singleProduct } = await useAsyncData('single-product', () => fetchSingleProduct(route.params.slug));

useHead({
    title: singleProduct?.value?.title
});

const { fetchProducts } = useProductsStore();
const { data: relatedProducts } = await useAsyncData('related-products', () => fetchProducts({limit: 5, category: singleProduct?.value?.category?.slug}));
</script>

<template>
  <Container class="pt-8" v-if="singleProduct">
    <BreadCrumb :path="`/products`" :pathName="`products`" :currentPathName="singleProduct?.title" />
    <div class="grid grid-cols-2 md-max:flex md-max:flex-col gap-8">
      <div class="single-product__imgs">
        <Swiper
          :modules="[Pagination]"
          pagination
          loop
          grab-cursor
          class="w-full aspect-square select-none"
        >

          <SwiperSlide
            v-for="(image, index) in singleProduct?.images"
            :key="index"
          >

            <NuxtImg 
              :src="image"
              class="w-full h-full object-cover"
              alt="Product Image"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="single-product__details flex flex-col gap-8 2xl:text-[16px] sm-max:text-[10px] pt-4">
        <Heading tag="h1">
          {{ singleProduct?.title }}
        </Heading>

        <p class="text-xl">{{ singleProduct?.description }}</p>

        <p class="inline-flex flex-wrap items-center gap-4 text-lg">
          <span>Category:</span> 
          <span class="bg-cyan-500 text-white px-2">{{ singleProduct?.category?.name?.toLowerCase() }}</span>
        </p>

        <p class="text-[48px] leading-[normal] font-bold text-[var(--secondary-color)]">${{ singleProduct?.price }}</p>
      </div>
    </div>

    <div class="related-products my-10">
      <Heading v-if="relatedProducts && relatedProducts?.length" class="text-[var(--primary-color)] mb-6">Related Products</Heading>
      <div v-if="relatedProducts && relatedProducts?.length" class="grid grid-cols-5 gap-8 sm-max:gap-4 sm-max:grid-cols-2 md-max:grid-cols-3">
          <ProductCard 
              v-if="relatedProducts"
              v-for="relatedProduct in relatedProducts"
              :key="relatedProduct?.id"
              :product-slug="relatedProduct?.slug" 
              :product-title="relatedProduct?.title" 
              :product-image="relatedProduct?.images[0]" 
          />
      </div>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
:deep(.swiper-pagination) {
  display: flex;
  align-items: center;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffffa2;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  margin-bottom: 0.5rem;
}

:deep(.swiper-pagination-bullet) {
  background-color: #292929;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: var(--primary-color);
}
</style>