import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap'
import { store, router } from './plugins/index'
import VueScrollTo from 'vue-scrollto'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGamepadModern } from '@fortawesome/pro-solid-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fass } from '@fortawesome/sharp-solid-svg-icons'
/* add icons to the library */
library.add(faGamepadModern)
library.add(fas, far, fal, fat, fad, fass)

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueScrollTo)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");
