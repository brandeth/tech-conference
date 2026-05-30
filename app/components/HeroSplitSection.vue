<template>
  <section class="hero-split-section" :class="{ 'hero-split-section--compact': compact }" :aria-labelledby="titleId">
    <div class="hero-copy">
      <p class="text-preset-5 hero-kicker">{{ kicker }}</p>
      <h1 :id="titleId" class="hero-title">{{ title }}</h1>
      <p class="text-preset-3 hero-intro">
        {{ intro }}
      </p>

      <div class="hero-actions">
        <a :href="primaryHref" class="primary-link">{{ primaryLabel }}</a>
        <a :href="secondaryHref" class="secondary-link">{{ secondaryLabel }}</a>
      </div>
    </div>

    <aside class="hero-panel" aria-label="Conference snapshot">
      <div class="status-line">
        <span>{{ statusLabel }}</span>
        <strong>{{ status }}</strong>
      </div>

      <dl class="event-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <dt>{{ stat.label }}</dt>
          <dd>{{ stat.value }}</dd>
        </div>
      </dl>

      <div class="terminal-window" aria-label="Conference command preview">
        <div class="terminal-top">
          <span />
          <span />
          <span />
        </div>
        <pre><code>{{ terminalPreview }}</code></pre>
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
import { useId } from 'vue'

type EventStat = {
  label: string
  value: string
}

const titleId = useId()

withDefaults(defineProps<{
  kicker?: string
  title?: string
  intro?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  statusLabel?: string
  status?: string
  stats?: EventStat[]
  terminalPreview?: string
  compact?: boolean
}>(), {
  kicker: 'June 18-20, 2026 / Singapore',
  title: 'Build what comes after now.',
  intro: 'Three days of practical talks, live systems demos, and working sessions for engineers shaping the next generation of software.',
  primaryLabel: 'Explore agenda',
  primaryHref: '#schedule',
  secondaryLabel: 'Meet speakers',
  secondaryHref: '#speakers',
  statusLabel: 'Registration status',
  status: 'Opening soon',
  stats: () => [
    { label: 'Stages', value: '4' },
    { label: 'Sessions', value: '32' },
    { label: 'Workshops', value: '9' },
  ],
  terminalPreview: `$ npm run conference
> syncing speakers
> compiling agenda
> launch window ready`,
  compact: false,
})
</script>

<style scoped>
.hero-split-section {
  display: grid;
  min-height: calc(100vh - 121px);
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  align-items: center;
  gap: 44px;
  color: var(--color-brand-neutral-100);
  padding: 40px 0 72px;
}

.hero-split-section--compact {
  min-height: 520px;
  padding: 32px;
}

.hero-copy {
  display: grid;
  gap: 26px;
}

.hero-kicker {
  color: var(--color-brand-green-200);
}

.hero-title {
  max-width: 760px;
  font-family: var(--font-chakra-petch);
  font-size: clamp(54px, 8vw, 116px);
  font-weight: 700;
  line-height: 0.94;
  letter-spacing: 0;
}

.hero-intro {
  max-width: 720px;
  color: var(--color-brand-neutral-200);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 6px;
}

.primary-link,
.secondary-link {
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  padding: 15px 22px;
  font-family: var(--font-jetbrains-mono);
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background-color 150ms ease-out,
    box-shadow 150ms ease-out,
    color 150ms ease-out,
    transform 150ms ease-out;
}

.primary-link {
  border: 1px solid var(--color-brand-neutral-100);
  background: var(--color-brand-green-200);
  color: var(--color-brand-neutral-900);
  box-shadow: 4px 4px 0 var(--color-brand-neutral-100);
}

.secondary-link {
  border: 1px solid var(--color-brand-neutral-600);
  color: var(--color-brand-neutral-100);
}

.primary-link:hover,
.secondary-link:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--color-brand-neutral-600);
}

.hero-panel {
  display: grid;
  gap: 22px;
  border: 1px solid var(--color-brand-neutral-600);
  background: rgba(0, 26, 36, 0.92);
  padding: 24px;
  box-shadow: 10px 10px 0 rgba(209, 255, 102, 0.18);
}

.status-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid var(--color-brand-neutral-600);
  padding-bottom: 18px;
  font-family: var(--font-jetbrains-mono);
  font-size: 12px;
  line-height: 140%;
  text-transform: uppercase;
}

.status-line span {
  color: var(--color-brand-neutral-200);
}

.status-line strong {
  color: var(--color-brand-yellow-100);
}

.event-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.stat-item {
  display: grid;
  gap: 4px;
  border: 1px solid var(--color-brand-neutral-600);
  padding: 14px 12px;
}

.stat-item dt {
  font-family: var(--font-jetbrains-mono);
  font-size: 12px;
  line-height: 140%;
  color: var(--color-brand-neutral-200);
  text-transform: uppercase;
}

.stat-item dd {
  font-family: var(--font-chakra-petch);
  font-size: 36px;
  font-weight: 700;
  line-height: 100%;
  color: var(--color-brand-cyan-100);
}

.terminal-window {
  overflow: hidden;
  border: 1px solid var(--color-brand-neutral-600);
  background: #000d12;
}

.terminal-top {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid var(--color-brand-neutral-600);
  padding: 12px;
}

.terminal-top span {
  width: 10px;
  height: 10px;
  background: var(--color-brand-red-100);
}

.terminal-top span:nth-child(2) {
  background: var(--color-brand-yellow-100);
}

.terminal-top span:nth-child(3) {
  background: var(--color-brand-green-200);
}

.terminal-window pre {
  overflow-x: auto;
  padding: 18px;
  color: var(--color-brand-neutral-100);
}

.terminal-window code {
  font-family: var(--font-jetbrains-mono);
  font-size: 14px;
  line-height: 170%;
}

@media (max-width: 900px) {
  .hero-split-section {
    min-height: auto;
    grid-template-columns: 1fr;
    padding-top: 34px;
  }
}

@media (max-width: 560px) {
  .hero-split-section--compact {
    padding: 24px 16px;
  }

  .event-stats {
    grid-template-columns: 1fr;
  }

  .hero-actions,
  .primary-link,
  .secondary-link {
    width: 100%;
  }
}
</style>
