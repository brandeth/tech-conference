<template>
  <main id="top" class="speakers-page">
    <SiteNav />

    <section
      class="speakers-page__inner mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]"
      aria-labelledby="speakers-title"
    >
      <header class="speakers-page__header">
        <h1 id="speakers-title" class="speakers-page__title text-preset-2">
          // speakers
        </h1>
      </header>

      <div class="speakers-page__divider" aria-hidden="true" />

      <div class="speakers-page__grid">
        <SpeakerCard
          v-for="speaker in speakers"
          :key="speaker.name"
          :image-src="speaker.imageSrc"
          :image-alt="speaker.imageAlt"
          :image-background-color="speaker.imageBackgroundColor"
          :name="speaker.name"
          :title-and-company="speaker.titleAndCompany"
          :talk-title="speaker.talkTitle"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { speakers } from '~/data/speakers'
</script>

<style scoped>
.speakers-page {
  min-height: 100vh;
  overflow: hidden;
  background: var(--color-brand-neutral-900);
  color: var(--color-brand-neutral-100);
}

.speakers-page__inner {
  display: grid;
  gap: 20px;
  padding: 44px 0 96px;
}

.speakers-page__title {
  color: var(--color-brand-green-200);
}

.speakers-page__divider {
  height: 1px;
  background: var(--color-brand-neutral-600);
}

.speakers-page__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1100px) {
  .speakers-page__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .speakers-page__inner {
    gap: 18px;
    padding: 36px 0 64px;
  }
}

@media (max-width: 560px) {
  .speakers-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
