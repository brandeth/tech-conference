<template>
  <header class="site-nav">
    <div class="site-nav__inner mx-auto w-[calc(100%_-_40px)] max-w-[1440px] max-[560px]:w-[calc(100%_-_32px)]">
      <NuxtLink to="/" class="site-nav__brand" aria-label="Dev Horizon home" @click="closeMenu">
        <img src="~/assets/images/logo.svg" alt="" class="site-nav__logo">
      </NuxtLink>

      <nav class="site-nav__links" aria-label="Primary navigation">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="site-nav__button"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        type="button"
        class="site-nav__menu-button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <img v-if="isMenuOpen" src="~/assets/images/close.svg" alt="" aria-hidden="true">
        <img v-else src="~/assets/images/bar.svg" alt="" aria-hidden="true">
      </button>
    </div>

    <nav
      id="mobile-navigation"
      class="site-nav__mobile-panel"
      :class="{ 'site-nav__mobile-panel--open': isMenuOpen }"
      :style="mobilePanelStyle"
      aria-label="Mobile navigation"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.label"
        :to="item.to"
        class="site-nav__button site-nav__button--mobile"
        @click="closeMenu"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Schedule', to: '/#schedule' },
  { label: 'Speakers', to: '/#speakers' },
] as const

const mobilePanelStyle = computed(() => ({
  maxHeight: isMenuOpen.value ? '240px' : '0px',
  paddingBottom: isMenuOpen.value ? '20px' : '0px',
}))

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid var(--color-brand-neutral-600);
  background: transparent;
}

.site-nav__inner {
  display: flex;
  min-height: 120px;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 30px 0;
}

.site-nav__brand {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
}

.site-nav__logo {
  display: block;
  width: clamp(192px, 26vw, 288px);
  height: auto;
}

.site-nav__links {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
}

.site-nav__button {
  display: inline-flex;
  min-width: 122px;
  min-height: 60px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-brand-neutral-100);
  background: var(--color-brand-neutral-900);
  color: var(--color-brand-neutral-100);
  font-family: var(--font-jetbrains-mono);
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0;
  padding: 15px 32px;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background-color 150ms ease-out,
    box-shadow 150ms ease-out,
    color 150ms ease-out,
    transform 150ms ease-out;
}

.site-nav__button:hover {
  box-shadow: 2px 2px 0 var(--color-brand-neutral-100);
}

.site-nav__button:focus-visible {
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

.site-nav__button:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}

.site-nav .site-nav__menu-button {
  display: none;
  width: 64px;
  min-width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-brand-neutral-100);
  background: var(--color-brand-neutral-900);
  color: var(--color-brand-neutral-100);
  cursor: pointer;
  transition:
    box-shadow 150ms ease-out,
    transform 150ms ease-out;
}

.site-nav__menu-button:hover {
  box-shadow: 2px 2px 0 var(--color-brand-neutral-100);
}

.site-nav__menu-button:focus-visible {
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
  outline: none;
}

.site-nav__menu-button:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}

.site-nav__menu-button img {
  display: block;
  width: 24px;
  height: 24px;
}

.site-nav__mobile-panel {
  display: none;
}

@media (max-width: 1023px) {
  .site-nav__inner {
    min-height: 160px;
    padding: 40px 0;
  }

  .site-nav__logo {
    width: clamp(180px, 24vw, 288px);
  }

  .site-nav__links {
    gap: 24px;
  }

  .site-nav__button {
    min-width: 132px;
    min-height: 80px;
    font-size: 24px;
    padding: 19px 32px;
  }
}

@media (max-width: 767px) {
  .site-nav__inner {
    min-height: 128px;
    padding: 24px 0;
  }

  .site-nav__logo {
    width: min(64vw, calc(100vw - 124px));
  }

  .site-nav__links {
    display: none;
  }

  .site-nav .site-nav__menu-button {
    display: inline-flex;
    flex: 0 0 auto;
  }

  .site-nav__mobile-panel {
    display: grid;
    gap: 12px;
    max-height: 0;
    overflow: hidden;
    padding: 0 20px;
    transition:
      max-height 180ms ease-out,
      padding-bottom 180ms ease-out;
  }

  .site-nav__mobile-panel.site-nav__mobile-panel--open {
    max-height: 240px;
    padding-bottom: 20px;
  }

  .site-nav__button--mobile {
    width: 100%;
    min-width: 0;
    min-height: 54px;
    font-size: 18px;
    padding: 14px 18px;
  }
}
</style>
