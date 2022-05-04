import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

// PrimeVue Theme
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, { ripple: true });

app.component("pv-menubar", Menubar);
app.component("pv-input-text", InputText);

app.mount("#app");
