<template>
  <section class="hero-section mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]" aria-labelledby="hero-title">
    <div class="hero-intro-panel">
      <img class="hero-pattern" :src="horizonText" alt="" aria-hidden="true">

      <h1 id="hero-title" class="text-preset-1 hero-title">
        {{ title }}
      </h1>

      <div class="hero-meta text-preset-6">
        <p>{{ date }}</p>
        <p>{{ location }}</p>
      </div>
    </div>

    <HeroKeynotePanel />
  </section>
</template>

<script setup lang="ts">
import horizonText from '~/assets/images/horizon-text.svg'

withDefaults(defineProps<{
  title?: string
  date?: string
  location?: string
}>(), {
  title: 'where code meets the machine',
  date: 'NOV 15-17, 2026',
  location: 'PIER 70, SF',
})
</script>

<style scoped>
.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 1.42fr) minmax(390px, 1fr);
  grid-auto-rows: 400px;
  gap: 32px;
  padding: 32px 0;
}

.hero-intro-panel {
  position: relative;
  isolation: isolate;
  box-sizing: border-box;
  display: grid;
  height: 400px;
  align-content: space-between;
  overflow: hidden;
  background: var(--color-brand-neutral-100);
  color: var(--color-brand-neutral-900);
  padding: 20px 32px;
}

.hero-title {
  position: relative;
  z-index: 1;
  max-width: 1180px;
}

.hero-pattern {
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 54%;
  width: min(74%, 620px);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hero-meta {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  border-top: 2px solid var(--color-brand-neutral-900);
  padding-top: 28px;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .hero-title {
    max-width: 1160px;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    max-width: 1260px;
  }
}

@media (max-width: 1180px) {
  .hero-section {
    grid-template-columns: minmax(0, 1fr);
    grid-auto-rows: auto;
  }

  .hero-intro-panel {
    height: 480px;
  }
}

@media (max-width: 1180px) and (min-width: 768px) {
  .hero-intro-panel {
    height: 360px;
  }
}

@media (max-width: 640px) {
  .hero-section {
    gap: 20px;
    padding-top: 32px;
  }

  .hero-intro-panel {
    height: 560px;
  }

  .hero-pattern {
    top: 50%;
    width: min(86%, 480px);
  }

  .hero-meta {
    flex-direction: column;
    gap: 8px;
    padding-top: 18px;
  }
}
</style>
