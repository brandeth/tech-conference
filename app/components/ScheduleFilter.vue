<template>
  <section class="schedule-filter" :aria-label="ariaLabel">
    <div class="schedule-filter__controls">
      <div class="schedule-filter__group schedule-filter__days" role="tablist" aria-label="Schedule days">
        <Button
          v-for="day in days"
          :key="day.value"
          variant="control-tab"
          :selected="selectedDay === day.value"
          role="tab"
          :aria-selected="selectedDay === day.value"
          @click="selectDay(day.value)"
        >
          {{ day.label }}
        </Button>
      </div>

      <span class="schedule-filter__separator" aria-hidden="true" />

      <div class="schedule-filter__group schedule-filter__tracks" aria-label="Session filters">
        <Button
          v-for="filter in filters"
          :key="filter.value"
          variant="control-filter"
          :selected="selectedFilters.includes(filter.value)"
          :aria-pressed="selectedFilters.includes(filter.value)"
          @click="toggleFilter(filter.value)"
        >
          {{ filter.label }}
        </Button>
      </div>

      <div class="schedule-filter__group schedule-filter__actions" aria-label="Schedule actions">
        <Button
          variant="control-toggle"
          :selected="myScheduleOnly"
          :aria-pressed="myScheduleOnly"
          @click="myScheduleOnly = !myScheduleOnly"
        >
          My schedule
        </Button>

        <Button variant="control-clear" @click="clearFilters">
          Clear
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type FilterOption = {
  label: string
  value: string
}

const props = withDefaults(
  defineProps<{
    days?: readonly FilterOption[]
    filters?: readonly FilterOption[]
    ariaLabel?: string
  }>(),
  {
    days: () => [
      { label: 'Day 01', value: 'day-01' },
      { label: 'Day 02', value: 'day-02' },
      { label: 'Day 03', value: 'day-03' },
    ],
    filters: () => [
      { label: 'Frontend', value: 'frontend' },
      { label: 'Performance', value: 'performance' },
      { label: 'A11y', value: 'a11y' },
      { label: 'Tooling', value: 'tooling' },
    ],
    ariaLabel: 'Schedule filters',
  },
)

const selectedDay = defineModel<string>('selectedDay', {
  default: 'day-01',
})

const selectedFilters = defineModel<string[]>('selectedFilters', {
  default: () => [],
})

const myScheduleOnly = defineModel<boolean>('myScheduleOnly', {
  default: false,
})

function selectDay(value: string) {
  selectedDay.value = value
}

function toggleFilter(value: string) {
  selectedFilters.value = selectedFilters.value.includes(value)
    ? selectedFilters.value.filter((filter) => filter !== value)
    : [...selectedFilters.value, value]
}

function clearFilters() {
  selectedDay.value = props.days[0]?.value ?? 'day-01'
  selectedFilters.value = []
  myScheduleOnly.value = false
}
</script>

<style scoped>
.schedule-filter {
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid var(--color-brand-neutral-600);
  padding-bottom: 20px;
}

.schedule-filter__controls {
  display: flex;
  width: max-content;
  min-width: 100%;
  align-items: center;
  gap: 12px;
}

.schedule-filter__group {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 8px;
}

.schedule-filter__separator {
  width: 1px;
  height: 36px;
  flex: 0 0 auto;
  background: var(--color-brand-neutral-600);
}

.schedule-filter__actions {
  padding-left: 4px;
}

@media (max-width: 1024px) {
  .schedule-filter {
    overflow-x: visible;
  }

  .schedule-filter__controls {
    width: 100%;
    min-width: 0;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 12px;
  }

  .schedule-filter__group {
    min-width: 0;
    flex: 0 1 auto;
    flex-wrap: wrap;
  }

  .schedule-filter__actions {
    padding-left: 0;
  }
}

@media (max-width: 640px) {
  .schedule-filter {
    margin-right: 0;
    padding-right: 0;
    padding-bottom: 20px;
  }

  .schedule-filter__controls {
    display: flex;
    align-items: flex-start;
    gap: 14px 12px;
  }

  .schedule-filter__days {
    gap: 14px;
  }

  .schedule-filter__separator {
    align-self: center;
  }

  .schedule-filter__tracks,
  .schedule-filter__actions {
    display: contents;
  }
}
</style>
