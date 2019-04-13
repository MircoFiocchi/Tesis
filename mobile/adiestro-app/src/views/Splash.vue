<template>
  <v-app id="splash" style="background-image: url('./static/images/bg/bg_splash.jpg'); background-repeat: no-repeat; background-size: cover;" dark>
    <v-container>
      <v-progress-linear :indeterminate="true" class="fixed-bottom"></v-progress-linear>
    </v-container>
  </v-app>
</template>

<script>

import { verUserFb, verUser } from '../core/auth.js'

export default {
  name: 'Splash',
  components: {
  },
  data: () => ({

  }),
  props: {
  },
  mounted: function () {
    setTimeout(this.redirect, 2000)
  },
  methods: {
    redirect () {
      var self = this
      var userId = localStorage.getItem('user_id')
      var userFb = localStorage.getItem('fb_id')
      var accesToken = localStorage.getItem('access_token')
      var loginType = localStorage.getItem('login_type')
      if (accesToken !== null && userId !== null) {
        if (loginType === 'fb') {
          verUserFb(self, { 'fb_id': userFb }, function (result) {
            if (result.indexOf('Unauthenticated') === -1) {
              self.$session.start()
              self.$session.set('jwt', '1')
              self.$router.replace('main')
              self.showDismissibleAlert = false
              self.loginSuccess = true
            } else {
              self.$router.replace('/login')
            }
          })
        } else {
          verUser(self, function (result) {
            if (result.indexOf('Unauthenticated') === -1) {
              self.$session.start()
              self.$session.set('jwt', '1')
              self.$router.replace('main')
              self.showDismissibleAlert = false
              self.loginSuccess = true
            } else {
              self.$router.replace('/login')
            }
          })
        }
      } else {
        this.$router.replace('/login')
      }
    }
  }
}

</script>
