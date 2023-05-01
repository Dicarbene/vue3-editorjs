# Editorjs for vue3


## Installation

To start using the library, install it in your project:

```bash
pnpm install @dicarbene/vue-editorjs
or
yarn add @dicarbene/vue-editorjs
```

## Usage

### For Vue 3

```html
<!-- App.vue -->
<template>
  <EditorjsClient :data="dat" />
</template>

<script lang="ts" setup>
  import { EditorjsClient } from '@dicarbene/vue-editorjs'
  const dat = ref({})
</script>
```

### For Nuxt 3

Define a nuxt plugin

```ts
// plugins/sonner.client.ts
import { EditorjsClient } from 'vue-sonner'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('EditorjsClient', EditorjsClient)
})
```

Use `Toaster` component anywhere in the Vue SFC

```html
<!-- editor.vue -->
<template>
  <div>
    <ClientOnly>
      <EditorjsClient :data="dat" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  const dat = ref({})
</script>
```

Add the build transpile.

```ts
// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ...
  build: {
    transpile: ['@dicarbene/vue-editorjs']
  }
})
```
