<script setup>
import Header from '~/components/Header.vue';

useHead({
  script: [
    {
      children: `
        try {
          const isDark = localStorage.getItem('isDark');
          if (isDark === 'true') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch(e) {}
      `,
      tagPosition: 'head' // Inject into <head> to run as early as possible
    }
  ]
})
</script>

<template>
  <Header />
  <slot />
</template>

<style lang="scss">
:root {
  --text-color: #333;
  --background-color: #f0f0f0;
  --primary-color: #53A5A4;
}

* {
  box-sizing: border-box;
}

html {
  &.dark {
    --background-color: #011313;
    --text-color: #fff;
  }

  background: var(--background-color);
}

body {
  font-family: 'IBM Plex Sans';
  color: var(--text-color);
}
</style>