<template>
  <main class="home-page">
    <nav class="site-nav" aria-label="Primary navigation">
      <NuxtLink to="/" class="brand-mark" aria-label="Dev Horizon home">
        <img src="~/assets/css/images/logo.svg" alt="" class="brand-logo">
      </NuxtLink>

      <div class="nav-links" aria-label="Conference sections">
        <a href="#agenda">Agenda</a>
        <a href="#speakers">Speakers</a>
        <NuxtLink to="/design-system">Design system</NuxtLink>
      </div>
    </nav>

    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="text-preset-5 hero-kicker">June 18-20, 2026 / Singapore</p>
        <h1 id="hero-title" class="hero-title">Build what comes after now.</h1>
        <p class="text-preset-3 hero-intro">
          Three days of practical talks, live systems demos, and working sessions for engineers shaping the next generation of software.
        </p>

        <div class="hero-actions">
          <a href="#agenda" class="primary-link">Explore agenda</a>
          <a href="#speakers" class="secondary-link">Meet speakers</a>
        </div>
      </div>

      <aside class="hero-panel" aria-label="Conference snapshot">
        <div class="status-line">
          <span>Registration status</span>
          <strong>Opening soon</strong>
        </div>

        <dl class="event-stats">
          <div v-for="stat in eventStats" :key="stat.label" class="stat-item">
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

    <section id="agenda" class="content-section" aria-labelledby="agenda-title">
      <div class="section-heading">
        <p class="text-preset-5">Agenda tracks</p>
        <h2 id="agenda-title" class="text-preset-2">Designed for people shipping real systems</h2>
      </div>

      <div class="track-grid">
        <article v-for="track in tracks" :key="track.title" class="track-card">
          <p>{{ track.time }}</p>
          <h3>{{ track.title }}</h3>
          <span>{{ track.detail }}</span>
        </article>
      </div>
    </section>

    <section id="speakers" class="content-section speaker-section" aria-labelledby="speakers-title">
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
const eventStats = [
  { label: 'Stages', value: '4' },
  { label: 'Sessions', value: '32' },
  { label: 'Workshops', value: '9' },
] as const

const tracks = [
  {
    time: '09:30',
    title: 'AI product systems',
    detail: 'Reliable agent workflows, evaluation, and product control surfaces.',
  },
  {
    time: '11:00',
    title: 'Frontend futures',
    detail: 'Interfaces that stay fast, resilient, and expressive at scale.',
  },
  {
    time: '14:00',
    title: 'Platform engineering',
    detail: 'Developer experience, deployment safety, and practical observability.',
  },
] as const

const speakers = [
  { initials: 'AK', name: 'Ari Kim', role: 'Principal Engineer, Runtime Labs' },
  { initials: 'MS', name: 'Maya Singh', role: 'Research Lead, Applied Interfaces' },
  { initials: 'JL', name: 'Jon Lee', role: 'VP Platform, Northstar Cloud' },
] as const

const terminalPreview = `$ npm run conference
> syncing speakers
> compiling agenda
> launch window ready`
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(209, 255, 102, 0.08) 1px, transparent 1px),
    linear-gradient(180deg, rgba(181, 233, 252, 0.06) 1px, transparent 1px),
    var(--color-brand-neutral-900);
  background-size: 72px 72px;
  color: var(--color-brand-neutral-100);
}

.site-nav,
.hero-section,
.content-section {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 0;
}

.brand-logo {
  display: block;
  width: min(192px, 52vw);
  height: auto;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
}

.nav-links a,
.primary-link,
.secondary-link {
  font-family: var(--font-jetbrains-mono);
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  text-transform: uppercase;
}

.nav-links a {
  color: var(--color-brand-neutral-200);
  text-decoration: none;
}

.nav-links a:hover {
  color: var(--color-brand-green-200);
}

.hero-section {
  display: grid;
  min-height: calc(100vh - 87px);
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  align-items: center;
  gap: 44px;
  padding: 40px 0 72px;
}

.hero-copy {
  display: grid;
  gap: 26px;
}

.hero-kicker,
.section-heading p {
  color: var(--color-brand-green-200);
}

.hero-title {
  max-width: 760px;
  font-family: var(--font-chakra-petch);
  font-size: clamp(64px, 8vw, 116px);
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
  text-decoration: none;
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

.hero-panel,
.track-card,
.speaker-card {
  border: 1px solid var(--color-brand-neutral-600);
  background: rgba(0, 26, 36, 0.92);
}

.hero-panel {
  display: grid;
  gap: 22px;
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

.stat-item dt,
.track-card p,
.speaker-card p {
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

.track-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.track-card {
  display: grid;
  min-height: 218px;
  align-content: space-between;
  gap: 26px;
  padding: 22px;
}

.track-card h3,
.speaker-card h3 {
  font-family: var(--font-chakra-petch);
  font-size: 24px;
  font-weight: 700;
  line-height: 110%;
  color: var(--color-brand-neutral-100);
}

.track-card span {
  color: var(--color-brand-neutral-200);
  font-size: 16px;
  line-height: 150%;
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

  .hero-section,
  .track-grid,
  .speaker-list {
    grid-template-columns: 1fr;
  }

  .hero-section {
    min-height: auto;
    padding-top: 34px;
  }
}

@media (max-width: 560px) {
  .site-nav,
  .hero-section,
  .content-section {
    width: min(100% - 32px, 1120px);
  }

  .hero-title {
    font-size: 54px;
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
