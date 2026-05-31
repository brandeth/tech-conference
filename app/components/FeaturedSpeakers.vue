<template>
  <section id="speakers" class="featured-speakers mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]" aria-labelledby="featured-speakers-title">
    <p class="featured-speakers__eyebrow text-preset-6-extrabold" aria-hidden="true">// FEATURED_SPEAKERS</p>
    <h2 id="featured-speakers-title" class="sr-only">Featured Speakers</h2>

    <div class="featured-speakers__grid">
      <SpeakerCard
        v-for="speaker in featuredSpeakers"
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
</template>

<script setup lang="ts">
import elenaAvatar from '~/assets/images/avatar-elena-vasquez.webp'
import jamesAvatar from '~/assets/images/avatar-james-okonkwo.webp'
import naomiAvatar from '~/assets/images/avatar-naomi-tanaka.webp'
import sarahAvatar from '~/assets/images/avatar-sarah-lindstrom.webp'

const featuredSpeakers = [
  {
    imageSrc: elenaAvatar,
    imageAlt: 'Elena Vasquez',
    imageBackgroundColor: 'var(--color-brand-cyan-100)',
    name: 'elena vasquez',
    titleAndCompany: 'Principal Frontend Engineer\n@ByteCraft',
    talkTitle: 'The next frontier of web development',
  },
  {
    imageSrc: naomiAvatar,
    imageAlt: 'Naomi Tanaka',
    imageBackgroundColor: 'var(--color-brand-blue-100)',
    name: 'naomi tanaka',
    titleAndCompany: 'Accessibility Engineering Lead\n@Axion',
    talkTitle: 'Screen readers deserve better components',
  },
  {
    imageSrc: jamesAvatar,
    imageAlt: 'James Okonkwo',
    imageBackgroundColor: 'var(--color-brand-purple-100)',
    name: 'james okonkwo',
    titleAndCompany: 'Engineering Director @Cartwell',
    talkTitle: 'Monorepos at scale: lessons from 500 packages',
  },
  {
    imageSrc: sarahAvatar,
    imageAlt: 'Sarah Lindström',
    imageBackgroundColor: 'var(--color-brand-yellow-100)',
    name: 'sarah lindström',
    titleAndCompany: 'Design Systems Lead @Tessera',
    talkTitle: 'Type-safe design tokens across platforms',
  },
] as const
</script>

<style scoped>
.featured-speakers {
  display: grid;
  gap: 24px;
  padding: 32px 0 96px;
}

.featured-speakers__eyebrow {
  color: var(--color-brand-green-200);
}

.featured-speakers__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1180px) {
  .featured-speakers__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .featured-speakers {
    padding-bottom: 64px;
  }
}

@media (max-width: 560px) {
  .featured-speakers__grid {
    grid-template-columns: 1fr;
  }
}
</style>
