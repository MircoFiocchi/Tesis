<template>
  <v-container pa-0 class="primary">
    <v-layout row wrap fill-height style="background-image: url('./static/images/bg/bg_logo.jpg')">
      <v-flex xs12 pa-0 >
        <template>
          <v-carousel v-if="items.length > 0" hide-controls class="carousel-promos">
            <v-carousel-item contain
            v-for="(item,i) in items"
            :key="i"
            :src="item.imagen"
            >
            <v-card color="primary" flat>
              <v-card-title primary-title>
                <v-flex xs12 class="text-xs-center">
                  <h3 class="headline mb-0">{{ item.nombre }}</h3>
                  <small>{{ item.descripcion }}</small>
                </v-flex>
              </v-card-title>
              <v-card-actions>
                <v-btn flat block color="black" v-on:click="addPromo(item.id_promocion)"><v-icon dark left>favorite</v-icon>USAR DESCUENTO</v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </template>
    </v-flex>
  </v-layout>
  <v-progress-linear v-if="!loadSuccess" :indeterminate="true" class="fixed-bottom"></v-progress-linear>
</v-container>
</template>
<script>

import { getPromos, ENTRADA, setMiPromo } from '../core/promos.js'

export default {
  name: 'Promos',
  components: {
  },
  data: () => ({
    loadSuccess: true,
    items: [],
    userId: localStorage.getItem('user_id')
  }),
  props: {
  },
  mounted: function () {
    var self = this
    self.loadSuccess = false
    getPromos(self, ['id_categoria=' + ENTRADA], function (result) {
      self.items = result
      self.loadSuccess = true
    })
  },
  methods: {
    addPromo (id) {
      var self = this
      setMiPromo(this, {'id_promocion': id, 'id_usuario': this.userId}, function (result) {
        if (result.id > 0) {
          self.$router.push('/mispromos/' + result.id)
        } else {
          navigator.notification.alert('Intenta nuevamente mas tarde', 'Problemas', 'Ok')
        }
      })
    }
  }
}
</script>
