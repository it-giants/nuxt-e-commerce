<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },

  href: String,

  type: {
    type: String,
    default: 'button'
  },
})
</script>

<template>
  <component
    :is="tag"
    :href="tag === 'a' ? href : null"
    :type="tag === 'button' ? 'button' : null"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>

</style>