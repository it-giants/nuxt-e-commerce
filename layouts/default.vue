<script setup>
import Header from '~/components/Header.vue';

useHead({
  script: [{
    children: `
     const isDark = localStorage.getItem('isDark');
      if (isDark === 'true') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
  `}]
})
</script>

<template>
  <Header />
  <slot />
</template>

<style lang="scss">
html.dark {
  background: black;
  color: white;
}
</style>