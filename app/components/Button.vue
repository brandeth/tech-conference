<template>
  <button
    :type="type"
    class="button"
    :class="[
      `button--${variant}`,
      { 'button--selected': selected || active },
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'primary-light' | 'control-tab'
    selected?: boolean
    active?: boolean
  }>(),
  {
    type: 'button',
    variant: 'primary',
  },
)
</script>

<style scoped>
.button {
  position: relative;
  display: inline-flex;
  height: var(--button-height, 54px);
  align-items: center;
  justify-content: center;
  padding: var(--button-padding, 16px 24px);
  border: 1px solid var(--button-border-color);
  background: var(--button-background);
  color: var(--button-color);
  box-shadow: var(--button-shadow, 2px 2px 0 var(--button-shadow-color));
  cursor: pointer;
  transition:
    background-color 150ms ease-out,
    box-shadow 150ms ease-out,
    color 150ms ease-out,
    transform 150ms ease-out;
}

.button::after {
  position: absolute;
  inset: 0;
  content: "";
  pointer-events: none;
}

.button--primary {
  --button-background: var(--color-brand-neutral-900);
  --button-border-color: var(--color-brand-neutral-100);
  --button-color: var(--color-brand-neutral-100);
  --button-shadow-color: var(--color-brand-neutral-100);
  --button-hover-background: var(--color-brand-green-200);
  --button-hover-border-color: var(--color-brand-green-200);
  --button-hover-color: var(--color-brand-neutral-900);
  --button-hover-shadow-color: var(--color-brand-neutral-600);
  --button-focus-background: var(--color-brand-neutral-900);
  --button-focus-color: var(--color-brand-neutral-100);
  --button-focus-ring-color: var(--color-brand-green-200);
  --button-active-shadow-color: var(--color-brand-neutral-600);
}

.button--primary,
.button--primary-light {
  font-family: var(--font-jetbrains-mono);
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.button--control-tab {
  --button-height: 36px;
  --button-padding: 8px 16px;
  --button-background: transparent;
  --button-border-color: var(--color-brand-neutral-100);
  --button-color: var(--color-brand-neutral-100);
  --button-shadow-color: transparent;
  --button-shadow: none;
  --button-hover-background: var(--color-brand-neutral-900);
  --button-hover-border-color: var(--color-brand-green-200);
  --button-hover-color: var(--color-brand-green-200);
  --button-hover-shadow-color: var(--color-brand-green-200);
  --button-focus-background: var(--color-brand-neutral-900);
  --button-focus-color: var(--color-brand-green-200);
  --button-focus-ring-color: var(--color-brand-green-200);
  --button-active-shadow-color: var(--color-brand-green-200);
  --button-selected-border-color: var(--color-brand-green-200);
  font-family: var(--font-jetbrains-mono);
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0;
  text-transform: uppercase;
}

.button--primary-light {
  --button-background: var(--color-brand-cyan-100);
  --button-border-color: var(--color-brand-neutral-900);
  --button-color: var(--color-brand-neutral-900);
  --button-shadow-color: var(--color-brand-neutral-900);
  --button-hover-background: var(--color-brand-neutral-900);
  --button-hover-border-color: var(--color-brand-neutral-600);
  --button-hover-color: var(--color-brand-neutral-100);
  --button-hover-shadow-color: var(--color-brand-neutral-600);
  --button-focus-background: var(--color-brand-cyan-100);
  --button-focus-color: var(--color-brand-neutral-900);
  --button-focus-ring-color: var(--color-brand-neutral-600);
  --button-active-shadow-color: var(--color-brand-neutral-900);
}

.button:hover {
  background: var(--button-hover-background);
  border-color: var(--button-hover-border-color, var(--button-border-color));
  color: var(--button-hover-color);
  box-shadow: var(--button-hover-shadow, 4px 4px 0 var(--button-hover-shadow-color));
}

.button--primary-light:hover {
  box-shadow: 2px 2px 0 var(--button-hover-shadow-color);
}

.button--control-tab:hover {
  box-shadow: 2px 2px 0 var(--button-hover-shadow-color);
}

.button:focus-visible {
  border-color: transparent;
  background: var(--button-focus-background);
  color: var(--button-focus-color);
  box-shadow: 2px 2px 0 var(--button-focus-ring-color);
  outline: none;
}

.button:focus-visible::after {
  background:
    repeating-linear-gradient(
        to right,
        var(--button-focus-ring-color) 0 4px,
        transparent 4px 8px
      )
      top left / 100% 1px no-repeat,
    repeating-linear-gradient(
        to right,
        var(--button-focus-ring-color) 0 4px,
        transparent 4px 8px
      )
      bottom left / 100% 1px no-repeat,
    repeating-linear-gradient(
        to bottom,
        var(--button-focus-ring-color) 0 4px,
        transparent 4px 8px
      )
      top left / 1px 100% no-repeat,
    repeating-linear-gradient(
        to bottom,
        var(--button-focus-ring-color) 0 4px,
        transparent 4px 8px
      )
      top right / 1px 100% no-repeat;
}

.button--primary-light:focus-visible {
  border: 1px solid transparent;
  background: var(--color-brand-cyan-100);
  color: var(--color-brand-neutral-900);
  box-shadow: 2px 2px 0 var(--color-brand-neutral-600);
  outline: none;
}

.button--primary-light:focus-visible::after {
  inset: -1px;
}

.button--selected {
  border-color: var(--button-selected-border-color, var(--button-border-color));
  background: var(--button-selected-background, var(--color-brand-green-200));
  color: var(--button-selected-color, var(--color-brand-neutral-900));
  box-shadow: var(--button-selected-shadow, none);
}

.button:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--button-active-shadow-color);
}

.button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
