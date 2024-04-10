/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins  } from "@/plugins"

// Components
import App from "./App.vue"

// Composables
import { createApp } from "vue"
import { setupRouter } from "./router"
import { setupStore } from "./utils/store"

const app = createApp(App)

setupStore(app)
registerPlugins(app)

await setupRouter(app)

app.mount("#app")
