// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { defineCustomElement } from 'vue'
import DemoTest from './components/DemoTest.ce.vue'
import './style.css'

const eDemoTest = defineCustomElement(DemoTest)

customElements.define('demo-hello', eDemoTest)

