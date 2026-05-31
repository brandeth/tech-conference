<template>
  <section
    id="schedule-highlights"
    class="schedule-highlights mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]"
    aria-labelledby="schedule-highlights-title"
  >
    <p class="schedule-highlights__eyebrow text-preset-6-extrabold" aria-hidden="true">// SCHEDULE_HIGHLIGHTS</p>
    <h2 id="schedule-highlights-title" class="sr-only">Schedule Highlights</h2>

    <div class="schedule-highlights__list">
      <HighlightCard
        v-for="session in scheduleHighlights"
        :key="session.title"
        :track-name="session.trackName"
        :title="session.title"
        :speaker-name="session.speakerName"
        :speaker-company="session.speakerCompany"
        :start-time="session.startTime"
        :end-time="session.endTime"
        :day="session.day"
        :bg-color="session.bgColor"
        :details="session.details"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const scheduleHighlights = [
  {
    trackName: 'performance',
    title: 'video compression for the web: the middle-out approach',
    speakerName: 'Dinesh Chugtai',
    speakerCompany: 'Pied Piper',
    startTime: '11:00',
    endTime: '12:00',
    day: 'Day 1',
    bgColor: 'var(--color-brand-red-100)',
    details: 'A practical look at balancing video quality, delivery cost, and latency for media-heavy products on the modern web.',
  },
  {
    trackName: 'frontend',
    title: 'CSS container queries in production',
    speakerName: 'Mei-Lin Zhang',
    speakerCompany: 'Roamly',
    startTime: '13:00',
    endTime: '14:00',
    day: 'Day 1',
    bgColor: 'var(--color-brand-yellow-100)',
    details: 'A practical walkthrough of shipping container-query based layouts in a large product without breaking older responsive patterns.',
  },
  {
    trackName: 'accessibility',
    title: 'designing accessible audio experiences',
    speakerName: 'Fatima Al-Rashid',
    speakerCompany: 'Spectra',
    startTime: '11:00',
    endTime: '12:00',
    day: 'Day 2',
    bgColor: 'var(--color-brand-blue-100)',
    details: 'Patterns for captions, transcripts, keyboard controls, and progressive enhancement in media-heavy interfaces.',
  },
  {
    trackName: 'tooling',
    title: 'deploy preview environments that scale',
    speakerName: 'Tom Kowalski',
    speakerCompany: 'Nimbus',
    startTime: '12:00',
    endTime: '13:00',
    day: 'Day 3',
    bgColor: 'var(--color-brand-purple-100)',
    details: 'How to keep preview environments fast, cheap, and trustworthy as teams and repository counts grow.',
  },
] as const
</script>

<style scoped>
.schedule-highlights {
  display: grid;
  gap: 24px;
  padding: 0 0 96px;
}

.schedule-highlights__eyebrow {
  color: var(--color-brand-green-200);
}

.schedule-highlights__list {
  display: grid;
  gap: 16px;
}

@media (max-width: 640px) {
  .schedule-highlights {
    padding-bottom: 64px;
  }
}
</style>
