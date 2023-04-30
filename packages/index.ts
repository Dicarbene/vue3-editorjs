import type { Plugin } from 'vue'
import EditorjsClient from './EditorjsClient.vue'

export {EditorjsClient}

const plugin: Plugin = {
  install(app) {
    app.component('EditorjsClient', EditorjsClient)
  }
}

export default plugin
