<template>
  <v-app id="logout" dark>

</v-app>
</template>

<script>
export default {
  data: () => ({
    fbAppId: '565840550532307',
    fbVersion: 'v2.8'
  }),
  methods: {
  },
  mounted: function () {
    if (this.$session.exists()) {
      var accessToken = localStorage.getItem('access_token')
      var tokenType = localStorage.getItem('token_type')
      var loginType = localStorage.getItem('login_type')
      switch (loginType) {
        case 'native':
          this.$http.get('http://192.168.1.2/api/auth/logout', {}, { headers: { 'Accept': 'application/json', 'Authorization': tokenType + ' ' + accessToken } }).then(result => {
          }, error => {
            console.error(error)
          })
          break
      }
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('token_type')
      localStorage.removeItem('login_type')
      this.$session.destroy()
      this.$router.replace('/')
    }
  }
}

</script>
