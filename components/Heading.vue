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
  font-size: 48px;
}

h2 {
  font-size: 42px;
}

h3 {
  font-size: 32px;
}

h4 {
  font-size: 28px;
}

h5 {
  font-size: 24px;
}

h6 {
  font-size: 20px;
}
</style>