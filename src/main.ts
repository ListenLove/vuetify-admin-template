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

const app = createApp(App)

setupRouter(app)

registerPlugins(app)

app.mount("#app")
