<template>
  <div id="editor"></div>
</template>

<script setup>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Attaches from '@editorjs/attaches';
import CheckList from '@editorjs/checklist';
import Code from '@editorjs/code';
import Checklist from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import image from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import Link from '@editorjs/link';
import Marker from '@editorjs/marker';
import NestedList from '@editorjs/nested-list'
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Raw from '@editorjs/raw';
import Table from '@editorjs/table';
import Underline from '@editorjs/underline';
import Warning from '@editorjs/warning';
import { onMounted } from "vue";



const props = defineProps({
  modelValue: {
    default: {},
  },
});

const emit = defineEmits(["update:modelValue"]);




onMounted(() => {
  const toolOptions = {
    header: {
      class: Header,
      shortcut: 'CMD+SHIFT+H',
    },
    list: List,
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    warning: {
      class: Warning,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+W',
      config: {
        titlePlaceholder: 'Title',
        messagePlaceholder: 'Message',
      },
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
    delimiter: Delimiter,
    list: {
      class: NestedList,
      inlineToolbar: true,
      config: {
        defaultStyle: 'unordered'
      },
    },
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    /*       image: {
            class: Image,
            config: {
              endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
              }
            }
          }, */
    linkTool: {
      class: Link,
      config: {
        endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
      }
    },
    attaches: {
      class: Attaches,
      config: {
        endpoint: 'http://localhost:8008/uploadFile'
      }
    },
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
      },
    },
    code: Code,
    raw: Raw,
    Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+M',
    },
    underline: Underline
  };
  const editor = new EditorJS({
    holder: "editor",
    minHeight: 0,
    tools: toolOptions,
    onChange: (api, event) => {
      api.saver.save().then(async (data) => {
        emit("update:modelValue", data);
      });
    },
    onSave: (api, event) => {
      api.saver.save().then(async (data) => {
        emit("update:modelValue", data);
      });
    },
    data: props.modelValue,
    logLevel: "ERROR",
  });
});
</script>
