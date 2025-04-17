<script setup>
import Header from '~/components/Header.vue';

// useHead({
//   script: [{
//     children: `
//      const isDark = localStorage.getItem('isDark');
//       if (isDark === 'true') {
//         document.documentElement.classList.add('dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//       }
//   `}]
// })
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