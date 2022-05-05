import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";


// PrimeVue Theme
import "primevue/resources/themes/mdc-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import TieredMenu from 'primevue/tieredmenu';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Sidebar from "primevue/sidebar";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import InputSwitch from 'primevue/inputswitch';


const app = createApp(App);

app.use(router);

app.use(PrimeVue, {ripple: true },{
  locale: {
    home: 'Inicio',
    inventory: 'Inventario',
    contacts: 'Contactos',
    machines: 'Maquinas',
    finances: 'Finanzas',
    logout: 'Cerrar Sesion',
    notifications: 'Notificaciones',
    profile: 'Perfil'
  }
});

app.use(ToastService);

app.component("pv-menubar", Menubar);
app.component("pv-input-text", InputText);
app.component("tiered-menu", TieredMenu);
app.component("pv-data-table", DataTable);
app.component("pv-column", Column);
app.component("pv-button", Button);
app.component("pv-toolbar", Toolbar);
app.component("pv-dialog", Dialog);
app.component("pv-toast", Toast);
app.component("pv-sidebar", Sidebar);
app.component("pv-dropdown", Dropdown);
app.component("pv-tag", Tag);
app.component("pv-textarea",Textarea);
app.component("pv-calendar",Calendar);
app.component("pv-password",Password);
app.component("pv-checkbox",Checkbox)
app.component("input-switch", InputSwitch);


app.mount("#app");
