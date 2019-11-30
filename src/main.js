import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'ru', color: 'rgb(142, 187, 208)'}) 

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
