<script setup>
import Button from './Button.vue';
import Heading from './Heading.vue';
</script>

<template>
  <section
    class="hero-section relative flex h-[80svh] before:content-[''] before:absolute before:inset-0 before:bg-[#000] before:opacity-50 before:brightness-50 before:z-[2]">
    <NuxtImg src="hero-img.jpg" class="w-full object-cover" quality="90" />
    <Container class="absolute left-0 right-0 h-full flex items-center z-[3]">
      <div class="flex flex-col items-start gap-8 text-white">
        <Heading tag="h1">
          Enjoy your shopping!
        </Heading>
        <p class="text-2xl">Our latest collection is here. Discover the latest trends <br /> and styles for the new
          year.</p>

        <Button
          class="text-[var(--primary-color)] bg-white py-2 px-4 hover:bg-[var(--primary-color)] hover:text-white transition-all font-bold text-xl">
          <NuxtLink to="products">Shop Now!</NuxtLink>
        </Button>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
</style>