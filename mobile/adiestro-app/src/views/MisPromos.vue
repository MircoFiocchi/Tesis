<template>
  <v-container pa-0 class="secondary">
    <v-layout row wrap fill-height style="background-image: url('./static/images/bg/bg_logo.jpg')">
      <v-flex xs12 pa-0 >
        <template>
          <v-carousel hide-controls class="carousel-promos">
            <v-carousel-item contain
            v-for="(item,i) in items"
            :key="i"
            :src="(!item.imagen) ? imagen_cumple : item.imagen"
            >
            <v-card color="primary" flat>
              <v-card-title primary-title>
                <v-flex xs12 class="text-xs-center">
                  <h3 class="headline mb-0">{{ (!item.nombre) ? 'Cumple de ' + item.name : item.nombre }}</h3>
                  <small>{{ (!item.descripcion) ? item.mensaje : item.descripcion }}</small>
                </v-flex>
              </v-card-title>
              <v-card-actions>
                <v-btn flat block color="red" v-on:click="(!item.id_mipromocion) ? redirectCupon(item.lista_hash_code) : redirectPromo(item.id_mipromocion)">VER PROMO</v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </template>
    </v-flex>
  </v-layout>
  <v-progress-linear v-if="loadSuccess < 2" :indeterminate="true" class="fixed-bottom"></v-progress-linear>
</v-container>
</template>
<script>

import { getMisPromos } from '../core/promos.js'
import { getMiCupon } from '../core/listas.js'

export default {
  name: 'MisPromos',
  components: {
  },
  data: () => ({
    imagen_cumple: 'http://guemesrepublica.com.ar/images/cupon_cumple.jpg',
    loadSuccess: 0,
    userId: localStorage.getItem('user_id'),
    items: []
  }),
  props: {
  },
  mounted: function () {
    var self = this
    self.loadSuccess = false
    getMisPromos(self, ['id_usuario=' + self.userId], function (result) {
      self.items = self.items.concat(result)
      self.loadSuccess++
    })
    getMiCupon(self, 0, self.userId, function (result) {
      self.items = self.items.concat(result)
      self.loadSuccess++
    })
  },
  methods: {
    redirectPromo (id) {
      this.$router.push('/promo/' + id)
    },
    redirectCupon (id) {
      this.$router.push('/listacupon/' + id)
    }
  }
}
</script>
