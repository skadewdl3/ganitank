import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

// Importing Ant Icons
import {
  MenuOutlined,
  DownOutlined,
  RightOutlined,
} from '@ant-design/icons-vue';

const app = createApp(App);

// Registering Ant Icons
app.component('down-outlined', DownOutlined);
app.component('menu-outlined', MenuOutlined);
app.component('right-outlined', RightOutlined);

app.use(router);

app.mount('#app');
