<script setup>
import { useCategoriesStore } from '#imports';
import CategoryCard from '~/components/CategoryCard.vue';
import Container from '~/components/Container.vue';
import Heading from '~/components/Heading.vue';

useHead({
    title: 'Categories',
});

const { fetchCategories } = useCategoriesStore();
const { data: categories } = await useAsyncData('categories', () => fetchCategories())
</script>

<template>
    <section class="categories py-8">
        <Container>
            <Heading class="mb-5 primary-color">Categories</Heading>
            <div v-if="categories && categories?.length" class="grid grid-cols-5 gap-8 sm-max:gap-4 sm-max:grid-cols-2 md-max:grid-cols-3">
                <CategoryCard 
                    v-for="category in categories"
                    :key="category?.id"
                    :category-slug="category?.slug"
                    :category-name="category?.name"
                    :category-image="category?.image"
                />
            </div>
        </Container>
    </section>
</template>

<style lang="scss" scoped></style>