<template>
  <button class="speaker-card" type="button" @click="$emit('select')">
    <div class="speaker-card__image-wrap" :style="imageWrapStyle">
      <img class="speaker-card__image" :src="imageSrc" :alt="imageAlt">
    </div>

    <div class="speaker-card__body">
      <div class="speaker-card__speaker">
        <h3 class="speaker-card__name text-preset-3">
          {{ name }}
        </h3>
        <p class="speaker-card__title text-preset-6-medium">
          {{ titleAndCompany }}
        </p>
      </div>

      <div class="speaker-card__divider" aria-hidden="true" />

      <p class="speaker-card__talk-title text-preset-6-medium">
        {{ talkTitle }}
      </p>
    </div>
  </button>
</template>

<script setup lang="ts">
import avatarPattern from '~/assets/images/avatar-pattern.svg'

const props = withDefaults(defineProps<{
  imageSrc: string
  imageAlt?: string
  imageBackgroundColor: string
  name: string
  titleAndCompany: string
  talkTitle: string
}>(), {
  imageAlt: '',
})

defineEmits<{
  select: []
}>()

const imageWrapStyle = computed(() => ({
  '--speaker-image-bg': props.imageBackgroundColor,
  '--speaker-pattern': `url(${avatarPattern})`,
}))
</script>

<style scoped>
.speaker-card {
  display: grid;
  grid-template-rows: 250px 1fr;
  width: 100%;
  height: 450px;
  overflow: hidden;
  border: 1px solid var(--color-brand-neutral-600);
  background: var(--color-brand-neutral-800);
  color: inherit;
  cursor: pointer;
  padding: 0;
  text-align: left;
  transition:
    border-color 150ms ease-out,
    box-shadow 150ms ease-out;
}

.speaker-card:hover {
  border-color: var(--color-brand-neutral-100);
  box-shadow: 4px 4px 0 var(--color-brand-neutral-100);
}

.speaker-card:focus-visible {
  border-color: var(--color-brand-green-200);
  outline: 1px dashed var(--color-brand-green-200);
  outline-offset: 4px;
}

.speaker-card__image-wrap {
  position: relative;
  display: grid;
  height: 250px;
  place-items: end center;
  overflow: hidden;
  background:
    var(--speaker-pattern) center / cover no-repeat,
    var(--speaker-image-bg);
}

.speaker-card__image {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 250px;
  object-fit: contain;
  object-position: center bottom;
}

.speaker-card__body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px 20px 20px;
}

.speaker-card__speaker {
  display: grid;
  gap: 4px;
}

.speaker-card__name {
  color: var(--color-brand-neutral-100);
  text-transform: lowercase;
}

.speaker-card__title {
  color: var(--color-brand-neutral-200);
  white-space: pre-line;
  text-transform: uppercase;
}

.speaker-card__divider {
  flex: none;
  margin-top: auto;
  height: 1px;
  background: var(--color-brand-neutral-600);
}

.speaker-card__talk-title {
  color: var(--color-brand-green-200);
  text-transform: uppercase;
}
</style>
