<script setup>
import { useCategoriesStore } from '#imports';
import CategoryCard from '~/components/CategoryCard.vue';
import Container from '~/components/Container.vue';
import Heading from '~/components/Heading.vue';

useHead({
    title: 'Categories',

    meta: [
        { name: 'description', content: 'Pick what you are interested in and start dive...' }
    ]
});

const { fetchCategories } = useCategoriesStore();
const { data: categories } = await useAsyncData('categories', () => fetchCategories())
</script>

<template>
    <section class="categories py-8">
        <Container>
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

            <div v-if="categories?.length === 0">
                <p>No categroies available...</p>
            </div>
        </Container>
    </section>
</template>

<style lang="scss" scoped></style>