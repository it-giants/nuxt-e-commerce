<script setup>
import { useCategoriesStore } from '#imports';
import CategoryCard from '~/components/CategoryCard.vue';
import Container from '~/components/Container.vue';
import Heading from '~/components/Heading.vue';
import HeroSection from '~/components/HeroSection.vue';

const hydrated = ref(false);
onMounted(() => {
  hydrated.value = true;
});

useHead({
    title: 'Homepage',

    meta: [
        { name: 'description', content: 'Find the most high quality products in the market!' }
    ]
});

const { fetchCategories } = useCategoriesStore();
const { data: categories } = await useAsyncData('homepage-categories', () => fetchCategories({limit: 5}));

const favoritesStore = useFavoritesStore();
const favorites = computed(() => favoritesStore.favorites.slice(0, 5));
</script>

<template>
  <HeroSection />

  <section class="categories py-10">
        <Container>
            <div>
                <Heading class="mb-5 primary-color">Categories</Heading>
                <div v-if="categories?.length" class="grid grid-cols-5 gap-8 sm-max:gap-4 sm-max:grid-cols-2 lg-max:grid-cols-4">
                    <CategoryCard
                        v-for="category in categories"
                        :key="category?.id"
                        :category-slug="category?.slug"
                        :category-name="category?.name"
                        :category-image="category?.image"
                    />
                </div>
            </div>

            <div v-if="favorites?.length" class="mt-10">
                <Heading class="mb-5 primary-color">Recently Favorited Products</Heading>

                <div v-if="hydrated">
                    <div class="grid grid-cols-5 gap-8 sm-max:gap-4 sm-max:grid-cols-2 lg-max:grid-cols-4">
                        <ProductCard 
                            v-for="product in favorites"
                            :key="product.id"
                            :product="product"
                        />
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<style lang="scss" scoped>

</style>