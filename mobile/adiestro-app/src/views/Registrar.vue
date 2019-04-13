<template>
  <v-app id="registrar" style="background-image: url('./static/images/bg/bg_login.jpg')" dark>
    <v-container>
      <v-layout justify-center row wrap>
        <v-flex xs7 sm5 py-2 class="login-logo">
          <v-img v-bind:class="{ opaco : isFocus }" src="./static/images/imdf.png" contain aspect-ratio="1"></v-img>
        </v-flex>
        <v-flex xs10 sm6 text-xs-center>
          <v-form>
            <v-text-field color="cyan" @focus="isFocus = true" @blur="isFocus = false" v-model="user.firstName" name="nombre" placeholder="Ingresá tu nombre" type="text" class="pt-0"></v-text-field>
            <v-text-field color="cyan" @focus="isFocus = true" @blur="isFocus = false" v-model="user.lastName" name="apellido" placeholder="Ingresá tu apellido" type="text" class="pt-0"></v-text-field>
            <v-text-field color="cyan" @focus="isFocus = true" @blur="isFocus = false" v-model="user.email" name="email" placeholder="Ingresá tu e-mail" type="email" class="pt-0"></v-text-field>
            <v-text-field color="cyan" @focus="isFocus = true" @blur="isFocus = false" v-model="user.password" id="password" name="password" placeholder="Contraseña" type="password" class="pt-0"></v-text-field>
            <v-text-field color="cyan" @focus="isFocus = true" @blur="isFocus = false" v-model="user.passwordConfirmation" id="passwordr" name="passwordr" placeholder="Repetí la contraseña" type="password" class="pt-0"></v-text-field>
            <v-text-field color="cyan" @focus="isFocus = true" @blur="isFocus = false" v-model="user.alumno" name="alumno" placeholder="Ingresá el nombre del alumno" type="text" class="pt-0"></v-text-field>

        </v-form>
        <v-spacer></v-spacer>
        <v-btn :disabled="!singSuccess" block color="success" v-on:click="register(user)">Registrarme -></v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>

import { regUser } from '../core/auth.js'

export default {
  name: 'Registrar',
  components: {
  },
  data: vm => ({
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      date: new Date().toISOString().substr(0, 10)
    },
    date: new Date().toISOString().substr(0, 10),
    singSuccess: true,
    isFocus: false,
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false
  }),
  props: {
  },
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  watch: {
    date (val) {
      this.user.date = this.date
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  methods: {
    register (user) {
      regUser(this, { 'name': user.firstName + ' ' + user.lastName, 'email': user.email, 'birthday': user.date, 'password': user.password, 'password_confirmation': user.passwordConfirmation }, function (result) {
        navigator.notification.alert(result.message, '', 'Ok')
        if (result.message.indexOf('existosamente')) {
          this.$router.push('/login')
        }
      })
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}

</script>
