<script setup>
import Header from '~/components/Header.vue';
</script>

<template>
  <Header />
  <slot />
</template>

<style lang="scss">
:root {
  --text-color: #333;
  --background-color: #f0f0f0;
}

html {
  &.dark {
    --background-color: #011313;
    --text-color: #fff;
  }

  background: var(--background-color);
}

body {
  color: var(--text-color);
}
</style>