<template>
  <article class="track-item">
    <h3 class="track-item__name text-preset-3" :class="nameColorClass">
      {{ name }}
    </h3>
    <p class="track-item__subheading text-preset-6-medium">
      {{ subheading }}
    </p>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  subheading: string
  color: 'yellow' | 'red' | 'blue' | 'purple'
}>()

const nameColorClass = computed(() => `track-item__name--${props.color}`)
</script>

<style scoped>
.track-item {
  display: grid;
  min-height: 112px;
  align-content: start;
  gap: 8px;
  border: 1px solid var(--color-brand-neutral-100);
  background: var(--color-brand-neutral-900);
  padding: 16px 18px;
  box-shadow: 2px 2px 0 var(--color-brand-neutral-100);
}

.track-item__name {
  text-transform: lowercase;
}

.track-item__name--yellow {
  color: var(--color-brand-yellow-100);
}

.track-item__name--red {
  color: var(--color-brand-red-100);
}

.track-item__name--blue {
  color: var(--color-brand-blue-100);
}

.track-item__name--purple {
  color: var(--color-brand-purple-100);
}

.track-item__subheading {
  max-width: 210px;
  color: var(--color-brand-neutral-200);
  text-transform: uppercase;
}
</style>
