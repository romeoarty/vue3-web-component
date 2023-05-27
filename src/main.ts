import './assets/main.css'

import { defineCustomElement } from 'vue'

import WebComponent from './web-component.ce.vue'

const element = defineCustomElement(WebComponent)

customElements.define('vue-web-component', element)
