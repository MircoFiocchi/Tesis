<template>
  <v-app id="guemes" dark>
    <v-navigation-drawer
    v-model="drawer"
    fixed class="secondary"
    app
    >
    <v-text class="nav-header">{{ dateNow }}</v-text>
    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-avatar  size="48px"  class="mr-3">
          <v-icon dark left>fas fa-user-circle</v-icon>
        </v-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ userName }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense>
      <template v-for="(item, index) in navItems">
        <v-list-tile v-if="item.id" :key="item.id" v-on:click="redirect(item.url, item.redirect)">
          <v-list-tile-action>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="white--text">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider class="my-4" v-else-if="item.divider" :key="index" my-5></v-divider>
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar color="secondary" absolute dark fixed app flat>
    <v-toolbar-side-icon v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-img src="./static/images/favicon.png" contain height="40px" ></v-img>
    <v-badge v-if="countMisPromos > 0" color="grey" left>
      <span slot="badge">{{ countMisPromos }}</span>
      <v-icon medium color="white" v-on:click="redirect('/mispromos', false)">fas fa-bell</v-icon>
    </v-badge>
  </v-toolbar>
  <router-view></router-view>
</v-app>
</template>
<script>
import nav from '../_nav'
import { getCountMisPromos } from '../core/promos.js'
import { getCountMisCupones } from '../core/listas.js'

export default {
  name: 'DefaultLayout',
  components: {
  },
  data () {
    return {
      countMisPromos: 0,
      drawer: false,
      navItems: nav.items,
      userName: localStorage.getItem('user_name'),
      loginType: localStorage.getItem('login_type'),
      userId: localStorage.getItem('user_id'),
      fbId: localStorage.getItem('fb_id'),
      dateNow: this.getDateNow(),
      leftDays: this.getLastDays()
    }
  },
  mounted: function () {
    this.updateMisPromos()
  },
  methods: {
    redirect (url, redirect) {
      if (!redirect) {
        this.updateMisPromos()
        this.$router.push(url)
      } else {
        window.location.href = url
      }
    },
    updateMisPromos () {
      var self = this
      this.countMisPromos = 0
      getCountMisPromos(self, { 'id_usuario': self.userId }, function (result) {
        var number = parseInt(result)
        if (Number.isInteger(number)) {
          self.countMisPromos += number
        }
      })
      getCountMisCupones(self, { 'id_usuario': self.userId }, function (result) {
        var number = parseInt(result)
        if (Number.isInteger(number)) {
          self.countMisPromos += number
        }
      })
    },
    getDateNow () {
      var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
      var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      var today = new Date()
      var dd1 = today.getUTCDay()
      var dd2 = today.getDate()
      var mm = today.getUTCMonth()
      return days[dd1] + ' ' + dd2 + ' de ' + months[mm]
    },
    getLastDays () {
      var today = new Date()
      var dd1 = today.getUTCDay()
      return 7 - dd1
    }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.replace('/login')
    } else {
      let cuponCumple = localStorage.getItem('cupon_cumple')
      if (cuponCumple) {
        localStorage.removeItem('cupon_cumple')
        this.$router.replace('/listacupon/' + cuponCumple)
      }
    }
  }
}
</script>
