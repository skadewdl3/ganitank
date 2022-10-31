import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

import './assets/main.css';

axios
  .post('http://localhost:3000/createcrasher', {
    name: 'ganitank',
  })
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

// Importing Ant Icons
import {
  MenuOutlined,
  DownOutlined,
  RightOutlined,
  CloseOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from '@ant-design/icons-vue';

const app = createApp(App);

// Registering Ant Icons
app.component('down-outlined', DownOutlined);
app.component('menu-outlined', MenuOutlined);
app.component('close-outlined', CloseOutlined);
app.component('right-outlined', RightOutlined);
app.component('youtube-outlined', YoutubeOutlined);
app.component('instagram-outlined', InstagramOutlined);

app.use(router);

app.mount('#app');
