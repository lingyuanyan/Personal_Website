import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from "vue";
import App from "./App.vue";
import 'bootstrap'
import { store, router } from './plugins/index'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app");
