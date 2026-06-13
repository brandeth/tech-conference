<template>
  <Teleport to="body">
    <dialog
      ref="dialogElement"
      class="speaker-dialog"
      :aria-labelledby="titleId"
      @cancel="close"
      @close="emitOpen(false)"
      @click="handleBackdropClick"
    >
      <div v-if="speaker" class="speaker-dialog__content">
        <header class="speaker-dialog__header">
          <img
            class="speaker-dialog__avatar"
            :src="speaker.imageSrc"
            :alt="speaker.imageAlt"
            :style="avatarStyle"
          >

          <div class="speaker-dialog__identity">
            <h2 :id="titleId" class="speaker-dialog__name text-preset-3">
              {{ speaker.name }}
            </h2>
            <p class="speaker-dialog__role text-preset-6-medium">
              {{ normalizedRole }}
            </p>
          </div>

          <button
            class="speaker-dialog__close"
            type="button"
            aria-label="Close speaker details"
            @click="close"
          >
            <img :src="closeIcon" alt="">
          </button>
        </header>

        <div class="speaker-dialog__divider" aria-hidden="true" />

        <p class="speaker-dialog__bio text-preset-6">
          {{ speakerBio }}
        </p>

        <div class="speaker-dialog__divider" aria-hidden="true" />

        <section class="speaker-dialog__talk" aria-labelledby="speaker-talk-title">
          <h3 id="speaker-talk-title" class="speaker-dialog__talk-label text-preset-6-extrabold">
            // TALK
          </h3>

          <HighlightCard
            compact
            :track-name="speaker.trackName || 'talk'"
            :title="speaker.talkTitle"
            :speaker-name="speaker.name"
            :speaker-company="speakerCompany"
            :start-time="speaker.startTime || 'TBA'"
            :end-time="speaker.endTime || ''"
            :day="speaker.day || 'TBA'"
            :bg-color="speaker.imageBackgroundColor"
          />
        </section>
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
import closeIcon from '~/assets/images/close.svg'
import type { Speaker } from '~/data/speakers'

const props = defineProps<{
  open: boolean
  speaker: Speaker | null
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const dialogElement = ref<HTMLDialogElement | null>(null)
const titleId = useId()

const normalizedRole = computed(() =>
  props.speaker?.titleAndCompany.replace(/\s*\n\s*/g, ' ') || '',
)

const speakerCompany = computed(() => {
  const company = props.speaker?.titleAndCompany.match(/@(.+)$/)?.[1]
  return company || 'DEVHORIZON_26'
})

const speakerBio = computed(() =>
  props.speaker?.bio ||
  `${props.speaker?.name} joins DEVHORIZON_26 to share practical lessons from their work and present “${props.speaker?.talkTitle}.”`,
)

const avatarStyle = computed(() => ({
  background: props.speaker?.imageBackgroundColor,
}))

const emitOpen = (value: boolean) => emit('update:open', value)

const close = () => {
  dialogElement.value?.close()
}

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === dialogElement.value) close()
}

watch(
  () => props.open,
  async (open) => {
    await nextTick()
    const dialog = dialogElement.value
    if (!dialog) return

    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  },
  { flush: 'post', immediate: true },
)
</script>

<style scoped>
.speaker-dialog {
  width: calc(100% - 32px);
  max-width: 800px;
  max-height: calc(100dvh - 32px);
  margin: auto;
  overflow: auto;
  border: 1px solid var(--color-brand-neutral-500);
  background: var(--color-brand-neutral-900);
  color: var(--color-brand-neutral-100);
  padding: 40px;
}

.speaker-dialog::backdrop {
  background: rgb(0 21 29 / 82%);
}

.speaker-dialog__content,
.speaker-dialog__talk {
  display: grid;
  gap: 20px;
}

.speaker-dialog__header {
  display: grid;
  grid-template-columns: 152.64px minmax(0, 1fr) 36px;
  align-items: center;
  gap: 20px;
}

.speaker-dialog__avatar {
  display: block;
  width: 152.64px;
  height: 120px;
  object-fit: cover;
}

.speaker-dialog__identity {
  display: grid;
  gap: 4px;
}

.speaker-dialog__name {
  color: var(--color-brand-neutral-100);
  text-transform: lowercase;
}

.speaker-dialog__role {
  color: var(--color-brand-neutral-200);
  text-transform: uppercase;
}

.speaker-dialog__close {
  display: grid;
  width: 36px;
  height: 36px;
  align-self: start;
  place-items: center;
  border: 1px solid var(--color-brand-neutral-100);
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.speaker-dialog__close img {
  width: 20px;
  height: 20px;
}

.speaker-dialog__close:focus-visible {
  outline: 1px dashed var(--color-brand-green-200);
  outline-offset: 4px;
}

.speaker-dialog__divider {
  height: 1px;
  background: var(--color-brand-neutral-500);
}

.speaker-dialog__bio {
  color: var(--color-brand-neutral-200);
}

.speaker-dialog__talk-label {
  color: var(--color-brand-green-200);
}

@media (max-width: 760px) {
  .speaker-dialog {
    padding: 24px;
  }

  .speaker-dialog__header {
    grid-template-columns: 88px minmax(0, 1fr) 36px;
    gap: 14px;
  }

  .speaker-dialog__avatar {
    width: 88px;
    height: 88px;
  }
}

@media (max-width: 520px) {
  .speaker-dialog {
    width: calc(100% - 24px);
    max-height: calc(100dvh - 24px);
    padding: 20px;
  }

  .speaker-dialog__header {
    grid-template-columns: 72px minmax(0, 1fr) 32px;
    gap: 12px;
  }

  .speaker-dialog__avatar {
    width: 72px;
    height: 72px;
  }

  .speaker-dialog__close {
    width: 32px;
    height: 32px;
  }
}
</style>
