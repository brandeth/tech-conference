<template>
  <main class="home-page">
    <SiteNav />

    <HeroSection />

    <TrackSection />

    <section id="speakers" class="content-section speaker-section mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]" aria-labelledby="speakers-title">
      <div class="section-heading">
        <p class="text-preset-5">Featured speakers</p>
        <h2 id="speakers-title" class="text-preset-2">Builders, researchers, and platform leaders</h2>
      </div>

      <div class="speaker-list">
        <article v-for="speaker in speakers" :key="speaker.name" class="speaker-card">
          <span class="speaker-avatar" aria-hidden="true">{{ speaker.initials }}</span>
          <div>
            <h3>{{ speaker.name }}</h3>
            <p>{{ speaker.role }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const speakers = [
  { initials: 'AK', name: 'Ari Kim', role: 'Principal Engineer, Runtime Labs' },
  { initials: 'MS', name: 'Maya Singh', role: 'Research Lead, Applied Interfaces' },
  { initials: 'JL', name: 'Jon Lee', role: 'VP Platform, Northstar Cloud' },
] as const

</script>

<style scoped>
.home-page {
  min-height: 100vh;
  overflow: hidden;
  background: var(--color-brand-neutral-900);
  color: var(--color-brand-neutral-100);
}

.section-heading p {
  color: var(--color-brand-green-200);
}

.speaker-card {
  border: 1px solid var(--color-brand-neutral-600);
  background: rgba(0, 26, 36, 0.92);
}

.speaker-card p {
  font-family: var(--font-jetbrains-mono);
  font-size: 12px;
  line-height: 140%;
  color: var(--color-brand-neutral-200);
  text-transform: uppercase;
}

.content-section {
  display: grid;
  gap: 28px;
  padding: 64px 0;
  border-top: 1px solid var(--color-brand-neutral-600);
}

.section-heading {
  display: grid;
  max-width: 680px;
  gap: 10px;
}

.speaker-card h3 {
  font-family: var(--font-chakra-petch);
  font-size: 24px;
  font-weight: 700;
  line-height: 110%;
  color: var(--color-brand-neutral-100);
}

.speaker-section {
  padding-bottom: 96px;
}

.speaker-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.speaker-card {
  display: grid;
  grid-template-columns: 64px 1fr;
  align-items: center;
  gap: 18px;
  padding: 18px;
}

.speaker-avatar {
  display: inline-grid;
  width: 64px;
  height: 64px;
  place-items: center;
  border: 1px solid var(--color-brand-neutral-600);
  background: var(--color-brand-purple-100);
  color: var(--color-brand-neutral-900);
  font-family: var(--font-jetbrains-mono);
  font-size: 16px;
  font-weight: 800;
}

@media (max-width: 900px) {
  .site-nav {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-links {
    justify-content: flex-start;
  }

  .speaker-list {
    grid-template-columns: 1fr;
  }
}
</style>
