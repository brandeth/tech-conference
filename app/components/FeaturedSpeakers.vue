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

    <NuxtLink class="featured-speakers__cta" to="#">
      View all speakers
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import elenaAvatar from '~/assets/images/avatar-elena-vasquez.webp'
import jamesAvatar from '~/assets/images/avatar-james-okonkwo.webp'
import lucasAvatar from '~/assets/images/avatar-lucas-moreau.webp'
import naomiAvatar from '~/assets/images/avatar-naomi-tanaka.webp'
import priyaAvatar from '~/assets/images/avatar-priya-sharma.webp'
import ryanAvatar from '~/assets/images/avatar-ryan-o-sullivan.webp'
import sarahAvatar from '~/assets/images/avatar-sarah-lindstrom.webp'
import tomAvatar from '~/assets/images/avatar-tom-kowalski.webp'

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
  {
    imageSrc: priyaAvatar,
    imageAlt: 'Priya Sharma',
    imageBackgroundColor: 'var(--color-brand-cyan-100)',
    name: 'priya sharma',
    titleAndCompany: 'Senior Developer Advocate @Cobalt',
    talkTitle: "ARIA patterns you're probably using wrong",
  },
  {
    imageSrc: lucasAvatar,
    imageAlt: 'Lucas Moreau',
    imageBackgroundColor: 'var(--color-brand-purple-100)',
    name: 'lucas moreau',
    titleAndCompany: 'Senior Frontend Engineer @Websmith',
    talkTitle: 'Browser DevTools: hidden gems for CSS debugging',
  },
  {
    imageSrc: ryanAvatar,
    imageAlt: "Ryan O'Sullivan",
    imageBackgroundColor: 'var(--color-brand-red-100)',
    name: "ryan o'sullivan",
    titleAndCompany: 'DevTools Engineer @Cobalt',
    talkTitle: 'Profiling React renders at 120fps',
  },
  {
    imageSrc: tomAvatar,
    imageAlt: 'Tom Kowalski',
    imageBackgroundColor: 'var(--color-brand-purple-100)',
    name: 'tom kowalski',
    titleAndCompany: 'Platform Engineer @Nimbus',
    talkTitle: 'Deploy preview environments that scale',
  },
] as const
</script>

<style scoped>
.featured-speakers {
  display: grid;
  gap: 24px;
  padding: 32px 0 48px;
}

.featured-speakers__eyebrow {
  color: var(--color-brand-green-200);
}

.featured-speakers__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.featured-speakers__cta {
  display: inline-flex;
  height: 54px;
  align-items: center;
  justify-content: center;
  justify-self: center;
  margin-top: 8px;
  padding: 16px 24px;
  border: 1px solid var(--color-brand-green-200);
  background: var(--color-brand-green-200);
  box-shadow: 4px 4px 0 var(--color-brand-neutral-600);
  color: var(--color-brand-neutral-900);
  font-family: var(--font-jetbrains-mono);
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background-color 150ms ease-out,
    border-color 150ms ease-out,
    box-shadow 150ms ease-out,
    color 150ms ease-out,
    transform 150ms ease-out;
}

.featured-speakers__cta:hover {
  border-color: var(--color-brand-green-200);
  background: var(--color-brand-green-200);
  box-shadow: 4px 4px 0 var(--color-brand-neutral-600);
  color: var(--color-brand-neutral-900);
}

.featured-speakers__cta:focus-visible {
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
  box-shadow: 2px 2px 0 var(--color-brand-green-200);
  color: var(--color-brand-neutral-100);
  outline: none;
}

.featured-speakers__cta:active {
  box-shadow: 1px 1px 0 var(--color-brand-neutral-600);
  transform: translate(2px, 2px);
}

@media (max-width: 1180px) {
  .featured-speakers__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .featured-speakers {
    padding-bottom: 40px;
  }
}

@media (max-width: 560px) {
  .featured-speakers__grid {
    grid-template-columns: 1fr;
  }
}
</style>
