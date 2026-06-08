<template>
  <main id="top" class="schedule-page">
    <SiteNav />

    <section
      class="schedule-page__inner mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]"
      aria-labelledby="schedule-title"
    >
      <header class="schedule-page__header">
        <h1 id="schedule-title" class="schedule-page__title text-preset-2">
          // schedule
        </h1>
      </header>

      <ScheduleFilter
        v-model:selected-day="selectedDay"
        v-model:selected-filters="selectedFilters"
        v-model:my-schedule-only="myScheduleOnly"
      />

      <div class="schedule-page__divider" aria-hidden="true" />

      <div class="schedule-page__list" aria-live="polite">
        <HighlightCard
          v-for="(session, index) in filteredSessions"
          :key="session.id"
          :track-name="session.trackName"
          :title="session.title"
          :speaker-name="session.speakerName"
          :speaker-company="session.speakerCompany"
          :start-time="session.startTime"
          :end-time="session.endTime"
          :day="session.dayLabel"
          :bg-color="session.bgColor"
          :details="session.details"
          :initially-open="index === 0"
        />

        <p
          v-if="filteredSessions.length === 0"
          class="schedule-page__empty text-preset-6-medium"
        >
          No sessions match these filters.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
type ScheduleSession = {
  id: string
  day: string
  dayLabel: string
  trackName: string
  title: string
  speakerName: string
  speakerCompany: string
  startTime: string
  endTime: string
  bgColor: string
  details: string
  saved: boolean
}

const selectedDay = ref('day-01')
const selectedFilters = ref<string[]>([])
const myScheduleOnly = ref(false)

const sessions = [
  {
    id: 'next-frontier-web-development',
    day: 'day-01',
    dayLabel: 'Day 1',
    trackName: 'keynote',
    title: 'the next frontier of web development',
    speakerName: 'Elena Vasquez',
    speakerCompany: 'ByteCraft',
    startTime: '9:00',
    endTime: '10:00',
    bgColor: 'var(--color-brand-cyan-100)',
    details:
      "The opening keynote. Elena takes the audience on a tour of the web platform's most transformative recent additions - from WebGPU to View Transitions to baseline support for container queries. She live-demos a full-stack application running entirely in the browser and makes the case that the gap between native and web has never been smaller.\n\nLocation: Room A",
    saved: true,
  },
  {
    id: 'profiling-react-renders',
    day: 'day-01',
    dayLabel: 'Day 1',
    trackName: 'performance',
    title: 'profiling react renders at 120fps',
    speakerName: "Ryan O'Sullivan",
    speakerCompany: 'Cobalt',
    startTime: '10:00',
    endTime: '11:00',
    bgColor: 'var(--color-brand-red-100)',
    details:
      'A field guide to tracing render bottlenecks, reading flamegraphs, and keeping interaction-heavy interfaces smooth on high-refresh displays.',
    saved: false,
  },
  {
    id: 'video-compression-middle-out',
    day: 'day-01',
    dayLabel: 'Day 1',
    trackName: 'performance',
    title: 'video compression for the web: the middle-out approach',
    speakerName: 'Dinesh Chugtai',
    speakerCompany: 'Pied Piper',
    startTime: '11:00',
    endTime: '12:00',
    bgColor: 'var(--color-brand-red-100)',
    details:
      'A practical look at balancing video quality, delivery cost, and latency for media-heavy products on the modern web.',
    saved: true,
  },
  {
    id: 'container-queries-production',
    day: 'day-01',
    dayLabel: 'Day 1',
    trackName: 'frontend',
    title: 'CSS container queries in production',
    speakerName: 'Mei-Lin Zhang',
    speakerCompany: 'Roamly',
    startTime: '13:00',
    endTime: '14:00',
    bgColor: 'var(--color-brand-yellow-100)',
    details:
      'A practical walkthrough of shipping container-query based layouts in a large product without breaking older responsive patterns.',
    saved: false,
  },
  {
    id: 'accessible-audio-experiences',
    day: 'day-02',
    dayLabel: 'Day 2',
    trackName: 'a11y',
    title: 'designing accessible audio experiences',
    speakerName: 'Fatima Al-Rashid',
    speakerCompany: 'Spectra',
    startTime: '11:00',
    endTime: '12:00',
    bgColor: 'var(--color-brand-blue-100)',
    details:
      'Patterns for captions, transcripts, keyboard controls, and progressive enhancement in media-heavy interfaces.',
    saved: true,
  },
  {
    id: 'aria-patterns-wrong',
    day: 'day-02',
    dayLabel: 'Day 2',
    trackName: 'a11y',
    title: "ARIA patterns you're probably using wrong",
    speakerName: 'Priya Sharma',
    speakerCompany: 'Cobalt',
    startTime: '14:00',
    endTime: '15:00',
    bgColor: 'var(--color-brand-blue-100)',
    details:
      'A careful pass through common ARIA pitfalls, with practical replacements that hold up across browsers and assistive tech.',
    saved: false,
  },
  {
    id: 'devtools-hidden-gems',
    day: 'day-03',
    dayLabel: 'Day 3',
    trackName: 'frontend',
    title: 'Browser DevTools: hidden gems for CSS debugging',
    speakerName: 'Lucas Moreau',
    speakerCompany: 'Websmith',
    startTime: '10:00',
    endTime: '11:00',
    bgColor: 'var(--color-brand-yellow-100)',
    details:
      'A practical tour through overlooked DevTools features for diagnosing cascade, layout, color, and animation bugs.',
    saved: false,
  },
  {
    id: 'deploy-preview-environments',
    day: 'day-03',
    dayLabel: 'Day 3',
    trackName: 'tooling',
    title: 'deploy preview environments that scale',
    speakerName: 'Tom Kowalski',
    speakerCompany: 'Nimbus',
    startTime: '12:00',
    endTime: '13:00',
    bgColor: 'var(--color-brand-purple-100)',
    details:
      'How to keep preview environments fast, cheap, and trustworthy as teams and repository counts grow.',
    saved: true,
  },
] satisfies ScheduleSession[]

const filteredSessions = computed(() =>
  sessions.filter((session) => {
    const matchesDay = session.day === selectedDay.value
    const matchesTrack =
      selectedFilters.value.length === 0 ||
      selectedFilters.value.includes(session.trackName)
    const matchesSaved = !myScheduleOnly.value || session.saved

    return matchesDay && matchesTrack && matchesSaved
  }),
)
</script>

<style scoped>
.schedule-page {
  min-height: 100vh;
  overflow: hidden;
  background: var(--color-brand-neutral-900);
  color: var(--color-brand-neutral-100);
}

.schedule-page__inner {
  display: grid;
  gap: 20px;
  padding: 44px 0 96px;
}

.schedule-page__header {
  display: grid;
  gap: 12px;
}

.schedule-page__title {
  color: var(--color-brand-green-200);
}

.schedule-page :deep(.schedule-filter) {
  border-bottom: 0;
  padding-bottom: 0;
}

.schedule-page__divider {
  height: 1px;
  background: var(--color-brand-neutral-600);
}

.schedule-page__list {
  display: grid;
  gap: 16px;
}

.schedule-page :deep(.highlight-card__content) {
  padding: 24px;
}

.schedule-page__empty {
  border: 1px solid var(--color-brand-neutral-600);
  padding: 24px;
  color: var(--color-brand-neutral-200);
  text-transform: uppercase;
}

@media (max-width: 640px) {
  .schedule-page__inner {
    gap: 18px;
    padding: 36px 0 64px;
  }
}
</style>
