<template>
  <pre class="syntax-code-block" :data-language="language"><code class="text-preset-6"><span
    v-for="(token, index) in highlightedTokens"
    :key="`${index}-${token.text}`"
    :class="token.type && `syntax-token syntax-token--${token.type}`"
  >{{ token.text }}</span></code></pre>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type TokenType = 'tag' | 'attribute' | 'string' | 'punctuation'

type Token = {
  text: string
  type?: TokenType
}

const props = withDefaults(defineProps<{
  code: string
  language?: string
}>(), {
  language: 'vue',
})

const tagPattern = /(<\/?[\w-]+)([^>]*)(\/?>)/g
const attributePattern = /(\s+)([:@#\w-]+)(=)("[^"]*"|'[^']*')/g

const highlightedTokens = computed(() => highlightMarkup(props.code))

function highlightMarkup(code: string) {
  const tokens: Token[] = []
  let cursor = 0

  for (const tagMatch of code.matchAll(tagPattern)) {
    const matchIndex = tagMatch.index ?? 0

    if (matchIndex > cursor) {
      tokens.push({ text: code.slice(cursor, matchIndex) })
    }

    tokens.push({ text: tagMatch[1], type: 'tag' })
    tokens.push(...highlightAttributes(tagMatch[2]))
    tokens.push({ text: tagMatch[3], type: 'punctuation' })

    cursor = matchIndex + tagMatch[0].length
  }

  if (cursor < code.length) {
    tokens.push({ text: code.slice(cursor) })
  }

  return tokens
}

function highlightAttributes(attributes: string) {
  const tokens: Token[] = []
  let cursor = 0

  for (const attributeMatch of attributes.matchAll(attributePattern)) {
    const matchIndex = attributeMatch.index ?? 0

    if (matchIndex > cursor) {
      tokens.push({ text: attributes.slice(cursor, matchIndex) })
    }

    tokens.push({ text: attributeMatch[1] })
    tokens.push({ text: attributeMatch[2], type: 'attribute' })
    tokens.push({ text: attributeMatch[3], type: 'punctuation' })
    tokens.push({ text: attributeMatch[4], type: 'string' })

    cursor = matchIndex + attributeMatch[0].length
  }

  if (cursor < attributes.length) {
    tokens.push({ text: attributes.slice(cursor) })
  }

  return tokens
}
</script>

<style scoped>
.syntax-code-block {
  overflow-x: hidden;
  max-width: 100%;
  background: var(--color-brand-neutral-800);
  color: var(--color-brand-neutral-100);
  padding: 16px;
  white-space: pre-wrap;
}

.syntax-code-block code {
  display: block;
  overflow-wrap: anywhere;
  white-space: inherit;
}

.syntax-token--tag {
  color: var(--color-brand-cyan-100);
}

.syntax-token--attribute {
  color: var(--color-brand-green-200);
}

.syntax-token--string {
  color: var(--color-brand-yellow-100);
}

.syntax-token--punctuation {
  color: var(--color-brand-neutral-200);
}
</style>
