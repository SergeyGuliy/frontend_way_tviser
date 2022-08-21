import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFZRgOLmKCX8YHdoEK8ILc9KnLsDE0gBA',
  authDomain: 'frontend-way-tviser.firebaseapp.com',
  projectId: 'frontend-way-tviser',
  storageBucket: 'frontend-way-tviser.appspot.com',
  messagingSenderId: '734356256708',
  appId: '1:734356256708:web:a8ae29a3093413c4a31691'
}

// Initialize Firebase
initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
