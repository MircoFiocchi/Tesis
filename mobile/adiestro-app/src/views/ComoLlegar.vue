<template>
  <v-app id="splash" dark>
    <v-container>
      <v-progress-linear :indeterminate="true" class="fixed-bottom"></v-progress-linear>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'ComoLlegar',
  components: {
  },
  data: () => ({

  }),
  props: {
  },
  mounted: function () {
    setTimeout(this.redirect, 10)
  },
  methods: {
    redirect () {
      window.location.href = 'geo:-31.634732,-64.432866'
    }
  }
}

</script>
