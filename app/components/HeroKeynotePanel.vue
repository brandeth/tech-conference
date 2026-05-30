<template>
  <aside class="hero-keynote-panel" aria-labelledby="keynote-speaker">
    <div class="hero-keynote-panel__content">
      <p class="text-preset-5 hero-keynote-panel__kicker">// Featured keynote</p>

      <div class="hero-keynote-panel__speaker">
        <h2 id="keynote-speaker" class="text-preset-2 hero-keynote-panel__name">
          elena vasquez
        </h2>
        <p class="text-preset-6-medium hero-keynote-panel__meta">
          Principal Frontend Engineer<br>
          @ByteCraft
        </p>
      </div>

      <div class="hero-keynote-panel__talk">
        <h3 class="text-preset-5-bold hero-keynote-panel__talk-title">
          The next frontier of web development
        </h3>
        <p class="text-preset-6-medium hero-keynote-panel__meta">
          Nov 15 / 9:00 / Room A
        </p>
      </div>

      <Button variant="primary-light" class="hero-keynote-panel__button">
        <span>View talk</span>
        <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <path d="M9.81641 3.20312C9.94141 3.04688 10.1914 3.04688 10.3477 3.20312L16.8789 9.73438C17.0352 9.89062 17.0352 10.1094 16.8789 10.2656L10.3477 16.7969C10.1914 16.9531 9.94141 16.9531 9.81641 16.7969L9.19141 16.2031C9.03516 16.0469 9.03516 15.7969 9.19141 15.6719L14.0352 10.7969H3.37891C3.16016 10.7969 3.00391 10.6406 3.00391 10.4219V9.54688C3.00391 9.35938 3.16016 9.17188 3.37891 9.17188H14.0352L9.19141 4.32812C9.03516 4.20312 9.03516 3.95312 9.19141 3.79688L9.81641 3.20312Z" fill="currentColor" />
        </svg>
      </Button>
    </div>

    <img
      class="hero-keynote-panel__avatar"
      :src="elenaAvatar"
      alt="Elena Vasquez"
    >
  </aside>
</template>

<script setup lang="ts">
import elenaAvatar from '~/assets/images/avatar-elena-vasquez.webp'
</script>

<style scoped>
.hero-keynote-panel {
  position: relative;
  box-sizing: border-box;
  display: grid;
  height: 100%;
  overflow: hidden;
  background: var(--color-brand-cyan-100);
  color: var(--color-brand-neutral-900);
}

.hero-keynote-panel__content {
  position: relative;
  z-index: 1;
  display: grid;
  width: min(58%, 390px);
  height: 100%;
  align-content: space-between;
  padding: 20px;
}

.hero-keynote-panel__kicker {
  color: var(--color-brand-neutral-900);
}

.hero-keynote-panel__speaker,
.hero-keynote-panel__talk {
  display: grid;
  gap: 12px;
}

.hero-keynote-panel__name {
  color: var(--color-brand-neutral-900);
  text-transform: lowercase;
}

.hero-keynote-panel__meta {
  color: var(--color-brand-neutral-600);
  text-transform: uppercase;
}

.hero-keynote-panel__talk {
  margin-top: 0;
}

.hero-keynote-panel__talk-title {
  max-width: 310px;
  color: var(--color-brand-neutral-900);
}

.hero-keynote-panel__button {
  width: fit-content;
  min-width: 164px;
  gap: 14px;
}

.hero-keynote-panel__button :deep(svg) {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
}

.hero-keynote-panel__avatar {
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(65%, 460px);
  height: 100%;
  object-fit: cover;
  object-position: 0% bottom;
}

@media (max-width: 1180px) {
  .hero-keynote-panel__content {
    width: 62%;
    gap: 20px;
    padding: 24px;
  }

  .hero-keynote-panel__talk {
    margin-top: 24px;
  }

  .hero-keynote-panel__button {
    margin-top: 12px;
  }
}

@media (max-width: 760px) {
  .hero-keynote-panel {
    height: 560px;
  }

  .hero-keynote-panel__content {
    width: min(72%, 390px);
    padding: 24px 20px;
  }

  .hero-keynote-panel__avatar {
    width: 68%;
    height: 82%;
  }
}

@media (max-width: 520px) {
  .hero-keynote-panel {
    height: 620px;
  }

  .hero-keynote-panel__content {
    width: 100%;
    padding-right: 20px;
  }

  .hero-keynote-panel__avatar {
    width: 82%;
    height: 48%;
    object-position: center bottom;
  }
}
</style>
