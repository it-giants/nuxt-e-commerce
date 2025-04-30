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
  <main>
    <slot />
  </main>
</template>

<style lang="scss">
:root {
  --text-color: #333;
  --background-color: #e9e9e9;
  --primary-color: #53A5A4;
  --secondary-color: #BF8567;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  
  &.dark {
    --background-color: #011313;
    --text-color: #fff;
    --secondary-color: #F3F1DD;
  }
  background: var(--background-color);
}

@media (max-width: 1399px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  html {
    font-size: 12px;
  }
}

body {
  font-family: 'IBM Plex Sans';
  color: var(--text-color);
  padding-top: 70px;
}

button {
  border-radius: 0;
}
</style>