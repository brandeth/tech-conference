<template>
  <section id="schedule" class="track-section mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]" aria-labelledby="tracks-title">
    <p class="track-section__eyebrow text-preset-6-extrabold" aria-hidden="true">// TRACKS</p>
    <h2 id="tracks-title" class="sr-only">Tracks</h2>

    <div class="track-section__grid">
      <TrackItem
        v-for="track in tracks"
        :key="track.name"
        :name="track.name"
        :subheading="track.subheading"
        :color="track.color"
        :to="track.to"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const tracks = [
  {
    name: 'frontend',
    subheading: 'Building modern interfaces for the web',
    color: 'yellow',
    to: { path: '/schedule', query: { day: 'day-01', track: 'frontend' } },
  },
  {
    name: 'performance',
    subheading: 'Make every millisecond count',
    color: 'red',
    to: { path: '/schedule', query: { day: 'day-01', track: 'performance' } },
  },
  {
    name: 'accessibility',
    subheading: 'Building inclusive experiences for everyone',
    color: 'blue',
    to: { path: '/schedule', query: { day: 'day-02', track: 'a11y' } },
  },
  {
    name: 'tooling',
    subheading: 'Level up your developer workflow',
    color: 'purple',
    to: { path: '/schedule', query: { day: 'day-03', track: 'tooling' } },
  },
] as const
</script>

<style scoped>
.track-section {
  display: grid;
  gap: 24px;
  padding: 8px 0 32px;
}

.track-section__eyebrow {
  color: var(--color-brand-green-200);
}

.track-section__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 1180px) {
  .track-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .track-section {
    padding-top: 0;
  }

  .track-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
