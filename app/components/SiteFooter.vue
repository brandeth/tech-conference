<template>
  <footer class="site-footer mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]">
    <div class="site-footer__main">
      <section class="site-footer__brand" aria-labelledby="footer-brand-title">
        <h2 id="footer-brand-title" class="site-footer__logo">DEVHORIZON_26</h2>
        <p class="site-footer__description text-preset-6">
          A three-day conference for engineers who build the interfaces humans use every day.
        </p>
      </section>

      <nav class="site-footer__nav" aria-label="Footer navigation">
        <div class="site-footer__group">
          <h3 class="site-footer__heading text-preset-6-extrabold">// NAVIGATE</h3>
          <ul class="site-footer__list">
            <li v-for="item in navItems" :key="item.label">
              <NuxtLink class="site-footer__link text-preset-6" :to="item.to">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer__group">
          <h3 class="site-footer__heading text-preset-6-extrabold">// TRACKS</h3>
          <ul class="site-footer__list">
            <li v-for="track in tracks" :key="track.label">
              <NuxtLink class="site-footer__link text-preset-6" :to="track.to">
                {{ track.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <address class="site-footer__group site-footer__venue">
          <h3 class="site-footer__heading text-preset-6-extrabold">// VENUE</h3>
          <p class="text-preset-6">
            Pier 70<br>
            San Francisco, CA<br>
            Nov 15-17, 2026
          </p>
        </address>
      </nav>
    </div>

    <div class="site-footer__bottom">
      <p class="site-footer__copyright text-preset-7">
        &copy; 2026 DEVHORIZON. ALL RIGHTS RESERVED.
      </p>

      <NuxtLink class="site-footer__back-to-top text-preset-7" to="#top">
        Back to top ↑
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Speakers', to: '/speakers' },
] as const

const tracks = [
  { label: 'Frontend', to: '/schedule' },
  { label: 'Performance', to: '/schedule' },
  { label: 'Accessibility', to: '/schedule' },
  { label: 'Tooling', to: '/schedule' },
] as const
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-brand-neutral-600);
  color: var(--color-brand-neutral-200);
}

.site-footer__main {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(560px, 1.12fr);
  gap: 48px;
  padding: 40px 0 36px;
}

.site-footer__brand {
  max-width: 430px;
}

.site-footer__logo {
  margin: 0;
  color: var(--color-brand-green-200);
  font-family: var(--font-chakra-petch);
  font-size: 24px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0;
}

.site-footer__description {
  margin: 16px 0 0;
  max-width: 390px;
}

.site-footer__nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 48px;
}

.site-footer__group {
  margin: 0;
  font-style: normal;
}

.site-footer__heading {
  margin: 0 0 16px;
  color: var(--color-brand-green-200);
}

.site-footer__list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-footer__link,
.site-footer__back-to-top {
  color: var(--color-brand-neutral-200);
  text-decoration: none;
  transition:
    color 150ms ease-out,
    text-decoration-color 150ms ease-out;
}

.site-footer__link:hover,
.site-footer__back-to-top:hover {
  color: var(--color-brand-green-200);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.site-footer__link:focus-visible,
.site-footer__back-to-top:focus-visible {
  color: var(--color-brand-green-200);
  outline: 1px dashed var(--color-brand-green-200);
  outline-offset: 4px;
}

.site-footer__venue p {
  margin: 0;
}

.site-footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-top: 1px solid var(--color-brand-neutral-600);
  padding: 24px 0;
  text-transform: uppercase;
}

.site-footer__copyright {
  margin: 0;
}

.site-footer__back-to-top {
  flex: 0 0 auto;
}

@media (max-width: 900px) {
  .site-footer__main {
    gap: 34px;
    grid-template-columns: 1fr;
    padding: 48px 0 42px;
  }

  .site-footer__brand,
  .site-footer__description {
    max-width: none;
  }
}

@media (min-width: 561px) and (max-width: 900px) {
  .site-footer__nav {
    gap: 9rem;
  }
}

@media (max-width: 560px) {
  .site-footer__main {
    gap: 32px;
    padding: 32px 0;
  }

  .site-footer__nav {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .site-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
