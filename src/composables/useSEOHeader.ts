import { useHead, useSeoMeta } from '@vueuse/head'

const useSEOHeader = () => {
  useHead({
    title: 'Vue Editorjs',
    titleTemplate: (title) =>
      `${title} | An opinionated editorjs component for Vue3/Nuxt3.`,
    meta: [
      {
        name: 'author',
        content: '@dicarbene'
      },
      {
        name: 'description',
        content: 'An opinionated editorjs component for Vue3/Nuxt3.'
      }
    ]
  })
  useSeoMeta({
    title: 'Vue Editorjs',
    description: 'An opinionated editorjs component for Vue3/Nuxt3.',
    ogDescription: 'An opinionated editorjs component for Vue3/Nuxt3.',
    ogTitle: 'Vue Editorjs',
  })
}
export { useSEOHeader }
