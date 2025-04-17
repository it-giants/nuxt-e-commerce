<!-- /app.vue -->
<script setup>
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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
