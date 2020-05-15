import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const configOptions = {
  apiKey: 'AIzaSyCZk581K1wgVwknNlaCudBS4qkdnVzeTDg',
  authDomain: 'vuelogin-35edb.firebaseapp.com',
  databaseURL: 'https://vuelogin-35edb.firebaseio.com',
  projectId: 'vuelogin-35edb',
  storageBucket: 'vuelogin-35edb.appspot.com',
  messagingSenderId: '403156272001',
  appId: '1:403156272001:web:0b12adc770ffc385ea5e80',
  measurementId: 'G-B8QKKCBYX3'
}
// Initialize Firebase(Sign in sign out)
firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
