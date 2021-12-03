require('./bootstrap');

// import the App Router
import router from './routes/Router';

import { createApp } from 'vue';

const app = createApp({})
app.use(router)
app.mount("#app");

