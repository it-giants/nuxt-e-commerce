<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: 'h2',
    validator(value) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
    }
  },
});

const tag = props.tag && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(props.tag) ? props.tag : 'h2';

</script>

<template>
  <component :is="tag" v-bind="$attrs">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: normal;
  font-weight: bold;

  &.primary-color {
    color: var(--primary-color);
  }
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2.625em;
}

h3 {
  font-size: 2em;
}

h4 {
  font-size: 1.75em;
}

h5 {
  font-size: 1.5em;
}

h6 {
  font-size: 1.25em;
}
</style>