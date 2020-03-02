import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import shopcar from './views/Shopcar.vue';
import 'view-design/dist/styles/iview.css';



Vue.use(ViewUI);
Vue.component('shop-car',shopcar)
Vue.config.productionTip = false
//把store注入到vue实例中

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
