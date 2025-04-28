<script setup>
import CategoryCard from '~/components/CategoryCard.vue';
import Heading from '~/components/Heading.vue';

import { getCategories } from '~/API/getCategories';

const categories = await getCategories(5);
</script>

<template>
  <Hero />

  <section class="categories py-10">
        <Container>
            <Heading class="mb-5 primary-color">Categories</Heading>
            <div v-if="categories && categories?.length" class="grid grid-cols-5 gap-8">
                <CategoryCard
                    v-for="category in categories"
                    :key="category.id"
                    :category-slug="category?.slug"
                    :category-name="category?.name"
                    :category-image="category?.image"
                />
            </div>
        </Container>
    </section>
</template>

<style lang="scss" scoped>

</style>