<template>
  <main id="top" class="home-page">
    <SiteNav />

    <HeroSection />

    <TrackSection />

    <FeaturedSpeakers />

    <ScheduleHighlights />
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  overflow: hidden;
  background: var(--color-brand-neutral-900);
  color: var(--color-brand-neutral-100);
}
</style>
