import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import ECharts from 'vue-echarts';
import './assets/font.css';
const app = createApp(App)
// app.component('v-chart', ECharts)
app.use(Antd).mount('#app')
