<template>
  <main class="min-h-screen bg-[var(--color-brand-neutral-900)] text-[var(--color-brand-neutral-100)]">
    <section class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <header class="grid gap-5 border-b border-[var(--color-brand-neutral-600)] pb-8 lg:grid-cols-[1fr_280px] lg:items-end">
        <div class="grid gap-4">
          <p class="text-preset-5 text-[var(--color-brand-green-200)]">Design system</p>
          <h1 class="text-preset-1 max-w-3xl">Button</h1>
          <p class="text-preset-3 max-w-3xl text-[var(--color-brand-neutral-200)]">
            Component examples, interactive states, and implementation usage against the conference design tokens.
          </p>
        </div>

        <div class="grid gap-2 border border-[var(--color-brand-neutral-600)] p-4">
          <span class="text-preset-7 text-[var(--color-brand-neutral-200)]">Route</span>
          <code class="text-preset-6-medium break-all text-[var(--color-brand-green-200)]">/design-system</code>
        </div>
      </header>

      <section class="grid gap-5">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div class="grid gap-2">
            <p class="text-preset-5 text-[var(--color-brand-green-200)]">Demo</p>
            <h2 class="text-preset-2">Primary button</h2>
          </div>
          <Button variant="primary-light">View talk -></Button>
        </div>

        <div class="grid gap-4 border border-[var(--color-brand-neutral-600)] bg-[var(--color-brand-neutral-800)] p-5 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="example in buttonExamples"
            :key="example.label"
            class="grid min-h-36 content-between gap-5 border border-[var(--color-brand-neutral-600)] p-4"
          >
            <div class="grid gap-1">
              <h3 class="text-preset-6-extrabold text-[var(--color-brand-neutral-100)]">{{ example.label }}</h3>
              <p class="text-preset-7 text-[var(--color-brand-neutral-200)]">{{ example.description }}</p>
            </div>

            <Button :variant="example.variant" :disabled="example.disabled" :autofocus="example.autofocus">
              {{ example.text }}
            </Button>
          </article>
        </div>
      </section>

      <section class="grid gap-5">
        <div class="grid gap-2">
          <p class="text-preset-5 text-[var(--color-brand-green-200)]">Navigation</p>
          <h2 class="text-preset-2">Menu button</h2>
        </div>

        <div class="flex flex-wrap items-center gap-12 border border-[var(--color-brand-neutral-600)] bg-[var(--color-brand-neutral-800)] p-6">
          <Button variant="menu" aria-label="Open menu">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" />
            </svg>
          </Button>

          <Button variant="menu" aria-label="Close menu">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" />
            </svg>
          </Button>

          <Button variant="menu" class="menu-hover-demo" aria-label="Open menu hover state">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" />
            </svg>
          </Button>

          <Button variant="menu" class="menu-focus-demo" aria-label="Close menu focus state">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" />
            </svg>
          </Button>
        </div>
      </section>

      <section class="grid gap-5">
        <div class="grid gap-2">
          <p class="text-preset-5 text-[var(--color-brand-green-200)]">Control</p>
          <h2 class="text-preset-2">Tab button</h2>
        </div>

        <div class="flex flex-wrap items-center gap-8 border border-[var(--color-brand-neutral-600)] bg-[var(--color-brand-neutral-800)] p-5">
          <Button variant="control-tab">Tab</Button>
          <Button variant="control-tab" selected>Tab</Button>
          <Button variant="control-tab" class="control-tab-hover-demo">Tab</Button>
          <Button variant="control-tab" class="control-tab-focus-demo">Tab</Button>
        </div>
      </section>

      <section class="grid gap-5">
        <div class="grid gap-2">
          <p class="text-preset-5 text-[var(--color-brand-green-200)]">Control</p>
          <h2 class="text-preset-2">Filter button</h2>
        </div>

        <div class="flex flex-wrap items-center gap-8 border border-[var(--color-brand-neutral-600)] bg-[var(--color-brand-neutral-800)] p-5">
          <Button variant="control-filter">Filter</Button>
          <Button variant="control-filter" selected>Filter</Button>
          <Button variant="control-filter" class="control-filter-hover-demo">Filter</Button>
          <Button variant="control-filter" class="control-filter-focus-demo">Filter</Button>
        </div>
      </section>

      <section class="grid gap-5">
        <div class="grid gap-2">
          <p class="text-preset-5 text-[var(--color-brand-green-200)]">Control</p>
          <h2 class="text-preset-2">Toggle button</h2>
        </div>

        <div class="flex flex-wrap items-center gap-8 border border-[var(--color-brand-neutral-600)] bg-[var(--color-brand-neutral-800)] p-5">
          <Button variant="control-toggle">Toggle</Button>
          <Button variant="control-toggle" selected>Toggle</Button>
          <Button variant="control-toggle" class="control-toggle-hover-demo">Toggle</Button>
          <Button variant="control-toggle" class="control-toggle-focus-demo">Toggle</Button>
        </div>
      </section>

      <section class="grid gap-5">
        <div class="grid gap-2">
          <p class="text-preset-5 text-[var(--color-brand-red-300)]">Control</p>
          <h2 class="text-preset-2">Clear button</h2>
        </div>

        <div class="flex flex-wrap items-center gap-12 border border-[var(--color-brand-neutral-600)] bg-[var(--color-brand-neutral-800)] p-6">
          <Button variant="control-clear">Clear</Button>
          <Button variant="control-clear" class="control-clear-hover-demo">Clear</Button>
          <Button variant="control-clear" class="control-clear-focus-demo">Clear</Button>
        </div>
      </section>

      <section class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div class="grid gap-4 border border-[var(--color-brand-neutral-600)] p-5">
          <div class="grid gap-2">
            <p class="text-preset-5 text-[var(--color-brand-green-200)]">Usage</p>
            <h2 class="text-preset-2">Vue component</h2>
          </div>

          <pre class="overflow-x-auto bg-[var(--color-brand-neutral-800)] p-4 text-[var(--color-brand-neutral-100)]"><code class="text-preset-6">{{ usageExample }}</code></pre>
        </div>

        <aside class="grid gap-4 border border-[var(--color-brand-neutral-600)] p-5">
          <div class="grid gap-2">
            <p class="text-preset-5 text-[var(--color-brand-green-200)]">Tokens</p>
            <h2 class="text-preset-2">Button recipe</h2>
          </div>

          <dl class="grid gap-3">
            <div
              v-for="token in buttonTokens"
              :key="token.name"
              class="grid grid-cols-[28px_1fr] items-center gap-3"
            >
              <span class="h-7 w-7 border border-[var(--color-brand-neutral-600)]" :style="{ background: token.value }" />
              <div class="grid gap-0.5">
                <dt class="text-preset-6-medium">{{ token.name }}</dt>
                <dd class="text-preset-7 text-[var(--color-brand-neutral-200)]">{{ token.value }}</dd>
              </div>
            </div>
          </dl>
        </aside>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
const buttonExamples = [
  {
    label: 'Default',
    description: 'Primary call to action.',
    text: 'Register now',
    variant: 'primary',
  },
  {
    label: 'Light',
    description: 'Cyan primary call to action.',
    text: 'View talk ->',
    variant: 'primary-light',
  },
  {
    label: 'Hover',
    description: 'Move the pointer over the button.',
    text: 'Hover me',
    variant: 'primary',
  },
  {
    label: 'Focus',
    description: 'Keyboard focus uses the dashed token ring.',
    text: 'Focus me',
    variant: 'primary',
    autofocus: true,
  },
  {
    label: 'Disabled',
    description: 'Unavailable actions keep the shape and type scale.',
    text: 'Sold out',
    variant: 'primary',
    disabled: true,
  },
] as const

const buttonTokens = [
  { name: 'Primary background', value: 'var(--color-brand-neutral-900)' },
  { name: 'Primary text', value: 'var(--color-brand-neutral-100)' },
  { name: 'Light background', value: 'var(--color-brand-cyan-100)' },
  { name: 'Light border', value: 'var(--color-brand-neutral-900)' },
] as const

const usageExample = `<Button>Get tickets</Button>

<Button variant="primary-light">
  View talk ->
</Button>

<Button variant="menu" aria-label="Open menu">
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" />
  </svg>
</Button>

<Button variant="control-tab" selected>
  Agenda
</Button>

<Button variant="control-filter" selected>
  Filter
</Button>

<Button variant="control-toggle" selected>
  Livestream
</Button>

<Button variant="control-clear">
  Clear
</Button>

<Button type="submit">
  Register now
</Button>

<Button disabled>
  Sold out
</Button>`
</script>

<style scoped>
.control-tab-hover-demo {
  background: var(--color-brand-neutral-900);
  border-color: var(--color-brand-green-200);
  color: var(--color-brand-green-200);
  box-shadow: 2px 2px 0 var(--color-brand-green-200);
}

.menu-hover-demo {
  background: var(--color-brand-neutral-900) !important;
  border-color: var(--color-brand-neutral-100) !important;
  color: var(--color-brand-neutral-100) !important;
  box-shadow: 2px 2px 0 var(--color-brand-neutral-100) !important;
}

.menu-focus-demo {
  border-color: transparent !important;
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
      top right / 1px 100% no-repeat,
    var(--color-brand-neutral-900) !important;
  color: var(--color-brand-neutral-100) !important;
  box-shadow: 2px 2px 0 var(--color-brand-green-200) !important;
}

.control-tab-focus-demo {
  border-color: transparent;
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
      top right / 1px 100% no-repeat,
    var(--color-brand-neutral-900);
  color: var(--color-brand-green-200);
  box-shadow: 2px 2px 0 var(--color-brand-green-200);
}

.control-filter-hover-demo {
  background: var(--color-brand-neutral-900);
  border-color: var(--color-brand-green-200);
  color: var(--color-brand-green-200);
  box-shadow: 2px 2px 0 var(--color-brand-green-200);
}

.control-filter-focus-demo {
  position: relative;
  border-color: transparent;
  background: var(--color-brand-neutral-900);
  color: var(--color-brand-green-200);
  box-shadow: 2px 2px 0 var(--color-brand-green-200);
}

.control-filter-focus-demo::after {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background:
    repeating-linear-gradient(
        to right,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      top center / calc(100% - 36px) 1px no-repeat,
    repeating-linear-gradient(
        to right,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      bottom center / calc(100% - 36px) 1px no-repeat,
    repeating-linear-gradient(
        45deg,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      top left / 18px 18px no-repeat,
    repeating-linear-gradient(
        135deg,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      top right / 18px 18px no-repeat,
    repeating-linear-gradient(
        135deg,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      bottom left / 18px 18px no-repeat,
    repeating-linear-gradient(
        45deg,
        var(--color-brand-green-200) 0 4px,
        transparent 4px 8px
      )
      bottom right / 18px 18px no-repeat;
  border: 0;
  content: "";
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

.control-toggle-hover-demo {
  background: transparent !important;
  border-color: transparent !important;
  border-style: solid !important;
  color: var(--color-brand-green-200) !important;
  box-shadow: 2px 2px 0 var(--color-brand-green-200) !important;
}

.control-toggle-focus-demo {
  border-color: var(--color-brand-green-200) !important;
  border-style: solid !important;
  background: transparent !important;
  color: var(--color-brand-green-200) !important;
  box-shadow: 2px 2px 0 var(--color-brand-green-200) !important;
}

.control-toggle-focus-demo::after {
  background: none !important;
  border: 0 !important;
  mask: none !important;
}

.control-clear-hover-demo {
  background: var(--color-brand-neutral-900) !important;
  border-color: var(--color-brand-red-300) !important;
  color: var(--color-brand-red-300) !important;
  box-shadow: 2px 2px 0 var(--color-brand-red-300) !important;
}

.control-clear-focus-demo {
  position: relative;
  border-color: transparent !important;
  background: var(--color-brand-neutral-900) !important;
  color: var(--color-brand-red-300) !important;
  box-shadow: 2px 2px 0 var(--color-brand-red-300) !important;
}

.control-clear-focus-demo::after {
  background: none !important;
  mask: none !important;
}

</style>
