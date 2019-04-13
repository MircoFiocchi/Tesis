<template>
  <v-app id="login" style="background-image: url('./static/images/bg/bg_login.jpg')" dark>
    <v-content>
      <v-container>
        <v-layout justify-center row wrap>
          <v-flex xs7 sm5 py-2 class="login-logo">
            <v-img v-bind:class="{ opaco : isFocus }" src="./static/images/imdf.png" contain aspect-ratio="1"></v-img>
          </v-flex>
          <v-flex xs10 sm6 text-xs-center>
            <v-form>
              <v-text-field  @focus="isFocus = true" @blur="isFocus = false" :disabled="!loginSuccess" color="cyan" name="login" placeholder="Usuario" v-model="input.email" type="email" class="pt-0"></v-text-field>
              <v-text-field  @focus="isFocus = true" @blur="isFocus = false" :disabled="!loginSuccess" color="cyan" id="password" name="password" v-model="input.password" placeholder="Contraseña" type="password" class="pt-0"></v-text-field>
            </v-form>
            <b-alert :variant="alert.color"
            dismissible
            :show="showDismissibleAlert"
            @dismissed="showDismissibleAlert=false">
            {{ alert.message }}
          </b-alert>
          <v-spacer></v-spacer>
          <v-btn :disabled="!loginSuccess" block color="success" v-on:click="login()">Entrar -></v-btn>
          <v-spacer></v-spacer>
          <v-btn block color="orange" >Recordar contraseña</v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="!loginSuccess" color="blue my-1" block center v-on:click="registro()"><v-icon dark left>far fa-registered</v-icon>Solicitar acceso Tutor</v-btn>
          <!--<v-btn :disabled="!loginSuccess" color="red my-0" block center v-on:click="authGL()"><v-icon dark left>fab fa-google</v-icon>Ingresar con Google</v-btn>-->
          <!--<v-btn color="blue my-1" block center v-on:click="login()"><v-icon dark left>fab fa-twitter</v-icon>Ingresar con Twitter</v-btn>-->
          <!--<facebook-login class="button"
          appId="565840550532307"
          @login="onLogin"
          @logout="onLogout"
          @sdk-loaded="sdkLoaded">
        </facebook-login>-->
      </v-flex>
    </v-layout>
  </v-container>
  <v-progress-linear v-if="!loginSuccess" :indeterminate="true" class="fixed-bottom"></v-progress-linear>
</v-content>
</v-app>
</template>

<script>
import Vue from 'vue'
function parseQueryString (queryString) {
  var qs = decodeURIComponent(queryString)
  var obj = {}
  var params = qs.split('&')
  params.forEach(function (param) {
    var splitter = param.split('=')
    obj[splitter[0]] = splitter[1]
  })
  return obj
}

export default {
  components: {
    // facebookLogin
  },
  data: () => ({
    isFocus: false,
    loginSuccess: true,
    cordova: Vue.cordova,
    authWindow: null,
    showDismissibleAlert: false,
    alert: {
      color: 'danger',
      message: ''
    },
    input: {
      email: '',
      password: '',
      remember_me: true
    }
  }),
  beforeMount: function () {
  },
  mounted: function () {
    Vue.cordova.on('deviceready', () => {
    })
  },
  methods: {
    registro () {
      this.$router.push('registrar')
    },
    authFB () {
      if (navigator.connection.type !== 'none') {
        this.authWindow = window.open('https://www.facebook.com/dialog/oauth' + '?client_id=' + '208355350058019' + '&redirect_uri=' + 'https://www.treemind.com.ar/popup.html' + '&response_type=token&scope=email', '_top', 'location=no,clearcache=yes')
        this.authWindow.addEventListener('loadstart', this.loginWindow_loadStartHandler)
        this.authWindow.addEventListener('exit', this.loginWindow_exitHandler)
      } else {
        navigator.notification.alert('No hay red', 'Problemas', 'Ok')
      }
    },
    loginWindow_exitHandler (event) {
      var url = event.url
      if (url.indexOf('access_token=') === -1 || url.indexOf('error=') === -1 || url === null) {
        navigator.notification.alert('Cancelo el proceso', 'Problemas', 'Ok')
        this.loginSuccess = true
      }
    },
    loginWindow_loadStartHandler (event) {
      this.loginSuccess = false
      var queryString
      var obj
      var url = event.url
      var self = this
      if (url.indexOf('access_token=') > 0 || url.indexOf('error=') > 0) {
        this.authWindow.close()
        if (url.indexOf('access_token=') > 0) {
          queryString = url.substr(url.indexOf('#') + 1)
          obj = parseQueryString(queryString)
          this.getUserDataFB(obj['access_token'], function (result) {
            var dataFb = result
            // if (result['age_range']['min'] > 17) {
            self.$http.post('http://guemesrepublica.com.ar/api/auth/authfb', { name: result['name'], email: result['email'], password: result['id'], fb_id: result['id'], active: 1 }, { headers: { 'content-type': 'application/json', 'X-Requested-With': 'XMLhttpRequest', 'Accept': 'application/json' } }).then(result => {
              localStorage.setItem('user_id', result.body.user.id)
              localStorage.setItem('fb_id', dataFb['id'])
              localStorage.setItem('user_name', dataFb['name'])
              localStorage.setItem('user_email', dataFb['email'])
              localStorage.setItem('access_token', obj['access_token'])
              localStorage.setItem('token_type', '')
              localStorage.setItem('login_type', 'fb')
              self.$session.start()
              self.$session.set('jwt', '1')
              self.$router.replace('main')
              self.showDismissibleAlert = false
              self.loginSuccess = true
            }, error => {
              console.log(error)
              navigator.notification.alert('Intente mas tarde nuevamente', 'Error', 'Ok')
              self.loginSuccess = true
            })
            //  } else {
            //    self.loginSuccess = true
            //    navigator.notification.alert('Eres menor de edad para usar esta aplicación', 'Error', 'Ok')
            //  }
          })
        } else if (url.indexOf('error=') > 0) {
          queryString = url.substring(url.indexOf('?') + 1, url.indexOf('#'))
          obj = parseQueryString(queryString)
          navigator.notification.alert('Error' + obj.error, 'Error', 'Ok')
          self.loginSuccess = true
        } else {
          navigator.notification.alert('No autorizado', 'Problemas', 'Ok')
          self.loginSuccess = true
        }
      }
    },
    getUserDataFB (accesToken, callback) {
      this.$http.get('https://graph.facebook.com/v3.2/me?fields=email%2Cid%2Cname%2Cage_range&access_token=' + accesToken, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
        callback(result.body)
      })
    },
    alertDimissed () {

    },
    login () {
      // const Vue = window.vue
      this.loginSuccess = false
      if (this.input.email !== '' && this.input.password !== '') {
        this.$http.post('http://guemesrepublica.com.ar/api/auth/login', this.input, { headers: { 'content-type': 'application/json', 'X-Requested-With': 'XMLhttpRequest' } }).then(result => {
          this.loginSuccess = true
          if (result.data.login === true) {
            this.loadLogin(result.data.user.id, result.data.user.name, result.data.user.email, result.data.access_token, result.data.token_type, 'native')
          } else {
            this.alert.color = 'danger'
            this.alert.message = 'Error! el codigo de acceso o la contraseña es incorrecta'
            this.showDismissibleAlert = true
          }
        }, error => {
          console.error(error)
          this.alert.color = 'danger'
          this.alert.message = 'Error! el codigo de acceso o la contraseña es incorrecta'
          this.showDismissibleAlert = true
          this.loginSuccess = true
        })
      } else {
        this.alert.color = 'warning'
        this.alert.message = 'Advertencia! debe escribir un codigo de acceso y su respectiva clave'
        this.showDismissibleAlert = true
        this.loginSuccess = true
      }
    },
    loadLogin (id, name, email, accesToken, tokenType, loginType) {
      localStorage.setItem('user_id', id)
      localStorage.setItem('user_name', name)
      localStorage.setItem('user_email', email)
      localStorage.setItem('access_token', accesToken)
      localStorage.setItem('token_type', tokenType)
      localStorage.setItem('login_type', loginType)
      this.$session.start()
      this.$session.set('jwt', '1')
      this.$router.replace('main')
      this.showDismissibleAlert = false
    }
  },
  beforeCreate: function () {
    if (this.$session.exists()) {
      this.$router.push('/')
    }
  }
}
</script>
