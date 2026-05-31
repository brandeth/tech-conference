<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const reloadAfterRouteImportError = () => {
  const reloadKey = `route-import-reload:${window.location.pathname}${window.location.search}`
  const previousReload = Number(sessionStorage.getItem(reloadKey) ?? 0)

  if (Date.now() - previousReload < 10_000) {
    return
  }

  sessionStorage.setItem(reloadKey, String(Date.now()))
  window.location.reload()
}

onMounted(() => {
  const handlePreloadError = (event: Event) => {
    event.preventDefault()
    reloadAfterRouteImportError()
  }

  const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    const message = event.reason instanceof Error ? event.reason.message : String(event.reason ?? '')

    if (!message.includes('Failed to fetch dynamically imported module')) {
      return
    }

    event.preventDefault()
    reloadAfterRouteImportError()
  }

  window.addEventListener('vite:preloadError', handlePreloadError)
  window.addEventListener('unhandledrejection', handleUnhandledRejection)

  onBeforeUnmount(() => {
    window.removeEventListener('vite:preloadError', handlePreloadError)
    window.removeEventListener('unhandledrejection', handleUnhandledRejection)
  })
})
</script>
