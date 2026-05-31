const routeImportErrorMessages = [
  'Failed to fetch dynamically imported module',
  'Importing a module script failed',
  'error loading dynamically imported module',
  'Expected a JavaScript-or-Wasm module script',
]

const getErrorMessage = (error: unknown): string => {
  if (!error) {
    return ''
  }

  if (error instanceof Error) {
    const causeMessage = 'cause' in error ? getErrorMessage(error.cause) : ''

    return `${error.message} ${causeMessage}`
  }

  if (typeof error === 'object') {
    const maybeError = error as { cause?: unknown, message?: unknown, statusMessage?: unknown, statusText?: unknown }

    return [
      maybeError.message,
      maybeError.statusMessage,
      maybeError.statusText,
      getErrorMessage(maybeError.cause),
    ]
      .filter(Boolean)
      .join(' ')
  }

  return String(error)
}

const isRouteImportError = (error: unknown) => {
  const message = getErrorMessage(error)

  return routeImportErrorMessages.some((routeImportErrorMessage) => message.includes(routeImportErrorMessage))
}

const reloadAfterRouteImportError = () => {
  const reloadKey = `route-import-reload:${window.location.pathname}${window.location.search}`
  const previousReload = Number(sessionStorage.getItem(reloadKey) ?? 0)

  if (Date.now() - previousReload < 10_000) {
    return
  }

  sessionStorage.setItem(reloadKey, String(Date.now()))
  window.location.reload()
}

export default defineNuxtPlugin((nuxtApp) => {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault()
    reloadAfterRouteImportError()
  })

  window.addEventListener('unhandledrejection', (event) => {
    if (!isRouteImportError(event.reason)) {
      return
    }

    event.preventDefault()
    reloadAfterRouteImportError()
  })

  window.addEventListener('error', (event) => {
    if (!isRouteImportError(event.error ?? event.message)) {
      return
    }

    event.preventDefault()
    reloadAfterRouteImportError()
  })

  nuxtApp.hook('app:error', (error) => {
    if (isRouteImportError(error)) {
      reloadAfterRouteImportError()
    }
  })

  nuxtApp.hook('vue:error', (error) => {
    if (isRouteImportError(error)) {
      reloadAfterRouteImportError()
    }
  })
})
