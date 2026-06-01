<template>
  <article
    class="highlight-card"
    :class="{ 'highlight-card--expanded': isExpanded }"
    :style="cardStyle"
  >
    <div class="highlight-card__track">
      <p class="highlight-card__track-name text-preset-7">{{ trackName }}</p>
    </div>

    <div class="highlight-card__content">
      <div class="highlight-card__summary">
        <h3 class="highlight-card__title text-preset-2">{{ title }}</h3>

        <p class="highlight-card__speaker text-preset-5" :aria-label="speakerLabel">
          <span class="highlight-card__speaker-name text-preset-5-bold">{{ speakerName }}</span>
          <span class="highlight-card__speaker-divider" aria-hidden="true">//</span>
          <span>{{ speakerCompany }}</span>
        </p>
      </div>

      <button
        class="highlight-card__toggle text-preset-7"
        type="button"
        :aria-expanded="isExpanded"
        @click="isExpanded = !isExpanded"
      >
        <span aria-hidden="true">{{ isExpanded ? '-' : '+' }}</span>
        {{ isExpanded ? 'Hide details' : 'Show details' }}
      </button>

      <div v-if="isExpanded" class="highlight-card__details text-preset-6">
        <slot>{{ details }}</slot>
      </div>
    </div>

    <aside class="highlight-card__meta" aria-label="Session timing">
      <div class="highlight-card__time">
        <time class="highlight-card__start text-preset-4">{{ startTime }}</time>
        <time class="highlight-card__end text-preset-7">{{ endTime }}</time>
      </div>

      <img class="highlight-card__barcode" :src="barcodeSrc" alt="" aria-hidden="true">

      <p class="highlight-card__day text-preset-7">{{ day }}</p>
    </aside>
  </article>
</template>

<script setup lang="ts">
import barcodeSrc from '~/assets/images/barcode.svg'

const props = withDefaults(
  defineProps<{
    trackName: string
    title: string
    speakerName: string
    speakerCompany: string
    startTime: string
    endTime: string
    day: string
    bgColor?: string
    details?: string
    initiallyOpen?: boolean
  }>(),
  {
    bgColor: 'var(--color-brand-yellow-100)',
    details: '',
    initiallyOpen: false,
  },
)

const isExpanded = ref(props.initiallyOpen)

const cardStyle = computed(() => ({
  '--highlight-card-bg': props.bgColor,
  '--highlight-card-accent': props.bgColor,
}))

const speakerLabel = computed(() => `${props.speakerName}, ${props.speakerCompany}`)
</script>

<style scoped>
.highlight-card {
  display: grid;
  width: 100%;
  min-height: 150px;
  grid-template-columns: 40px minmax(0, 1fr) 156px;
  border: 1px solid var(--color-brand-neutral-600);
  background: var(--highlight-card-bg);
  color: var(--color-brand-neutral-900);
}

.highlight-card__track {
  display: grid;
  place-items: center;
  background: var(--color-brand-neutral-900);
}

.highlight-card__track-name {
  color: var(--highlight-card-accent);
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.highlight-card__content {
  display: grid;
  align-content: center;
  gap: 14px;
  padding: 24px;
}

.highlight-card__summary {
  display: grid;
  gap: 10px;
}

.highlight-card__title {
  max-width: 840px;
  color: var(--color-brand-neutral-900);
}

.highlight-card__speaker {
  display: flex;
  flex-wrap: wrap;
  gap: 0 14px;
  color: var(--color-brand-neutral-600);
}

.highlight-card__speaker-name {
  color: var(--color-brand-neutral-900);
}

.highlight-card__speaker-divider {
  color: var(--color-brand-neutral-900);
}

.highlight-card__toggle {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  color: var(--color-brand-neutral-600);
  cursor: pointer;
  padding: 0;
  text-transform: uppercase;
}

.highlight-card__toggle:focus-visible {
  outline: 1px dashed var(--color-brand-neutral-900);
  outline-offset: 4px;
}

.highlight-card__details {
  max-width: 760px;
  color: var(--color-brand-neutral-600);
}

.highlight-card__meta {
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 8px;
  border-left: 2px dashed var(--color-brand-neutral-900);
  padding: 24px;
  text-align: center;
}

.highlight-card__time {
  display: grid;
  gap: 0;
}

.highlight-card__start,
.highlight-card__end,
.highlight-card__day {
  color: var(--color-brand-neutral-900);
}

.highlight-card__barcode {
  width: 122px;
  height: 40px;
  object-fit: contain;
}

.highlight-card__day {
  text-transform: uppercase;
}

@media (max-width: 760px) {
  .highlight-card {
    grid-template-columns: minmax(0, 1fr);
    min-height: 0;
  }

  .highlight-card__track {
    min-height: 47px;
    padding: 10px 18px;
  }

  .highlight-card__track-name {
    writing-mode: horizontal-tb;
    transform: none;
    text-align: center;
  }

  .highlight-card__content {
    gap: 20px;
    padding: 24px;
  }

  .highlight-card__summary {
    gap: 17px;
  }

  .highlight-card__speaker {
    gap: 0 15px;
  }

  .highlight-card__meta {
    grid-column: 1 / -1;
    grid-template-columns: 64px minmax(0, 1fr) auto;
    align-items: center;
    border-top: 2px dashed var(--color-brand-neutral-900);
    border-left: 0;
    column-gap: 16px;
    padding: 24px;
    text-align: left;
  }

  .highlight-card__time {
    justify-self: start;
  }

  .highlight-card__barcode {
    justify-self: center;
    width: 179px;
    max-width: 36vw;
    height: 62px;
  }

  .highlight-card__day {
    justify-self: end;
    white-space: nowrap;
  }
}
</style>
