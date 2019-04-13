// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueSession from 'vue-session'
import VueResource from 'vue-resource'
import VueCordova from 'vue-cordova'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
import '../static/css/styles.css'

Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme:
  {
    primary: '#C0001F',
    secondary: '#9e1027',
    accent: '#fbee38',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.use(VueResource)

var accesToken = localStorage.getItem('access_token')
var tokenType = localStorage.getItem('token_type')

var access = tokenType + ' ' + accesToken

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', access)
  request.headers.set('Accept', 'application/json')
  next()
})

Vue.use(VueSession)

Vue.config.productionTip = false

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', '../cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
const vueApp = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: function () {
    return {
      cordova: Vue.cordova
    }
  },
  methods: {
    onDeviceReady (data) {
      // this.$router.push('/promos')
      // this.$router.push('listacupon/' + data)
      // navigator.notification.alert('listacuponesputin/' + data, '', 'Ok')
      localStorage.setItem('cupon_cumple', data)
    }
  }
})

document.addEventListener('deviceReady', function () {
  window.plugins.intent.getCordovaIntent(function (Intent) {
    if (Intent.data !== null) {
      let res = Intent.data.split('/')
      if (res[3] === 'cumple') {
        vueApp.onDeviceReady(res[4])
      }
    }
  })
})
