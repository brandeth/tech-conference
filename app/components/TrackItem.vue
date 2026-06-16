<template>
  <NuxtLink class="track-item" :to="to" :aria-label="`View ${name} sessions`">
    <h3 class="track-item__name text-preset-3" :class="nameColorClass">
      {{ name }}
    </h3>
    <p class="track-item__subheading text-preset-6-medium">
      {{ subheading }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  name: string
  subheading: string
  color: 'yellow' | 'red' | 'blue' | 'purple'
  to: RouteLocationRaw
}>()

const nameColorClass = computed(() => `track-item__name--${props.color}`)
</script>

<style scoped>
.track-item {
  position: relative;
  display: grid;
  min-height: 112px;
  align-content: start;
  gap: 8px;
  border: 1px solid var(--color-brand-neutral-100);
  background: var(--color-brand-neutral-900);
  padding: 16px 18px;
  box-shadow: 2px 2px 0 var(--color-brand-neutral-100);
  text-decoration: none;
  transition:
    border-color 150ms ease-out,
    box-shadow 150ms ease-out;
}

.track-item:hover {
  border-color: var(--color-brand-green-200);
  box-shadow: 2px 2px 0 var(--color-brand-green-200);
}

.track-item:focus-visible {
  border-color: transparent;
  box-shadow: none;
  outline: none;
}

.track-item:focus-visible::after {
  position: absolute;
  inset: -1px;
  content: "";
  pointer-events: none;
  background:
    repeating-linear-gradient(
        to right,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      top left / 100% 1px no-repeat,
    repeating-linear-gradient(
        to right,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      bottom left / 100% 1px no-repeat,
    repeating-linear-gradient(
        to bottom,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      top left / 1px 100% no-repeat,
    repeating-linear-gradient(
        to bottom,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      top right / 1px 100% no-repeat;
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
