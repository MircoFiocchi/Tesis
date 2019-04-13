<template>
  <v-container pa-0 class="secondary">
    <h2 class="mt-5 pa-4 headline text-uppercase text-xs-center">Precios</h2>
    <v-layout row wrap mt-2>
      <v-flex xs12 pa-0>
        <v-list class="transparent">
          <v-list-group
          v-for="item in items"
          :key="item.nombre"
          :prepend-icon="item.icono"
          no-action
          >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                <h3>{{ item.nombre }}</h3>
                <small>Descripción</small>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile
          v-for="subItem in item.items"
          :key="subItem.nombre"
          >
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.nombre }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
          ${{ subItem.precio }}
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-flex>
  <v-progress-linear v-if="!loadSuccess" :indeterminate="true" class="fixed-bottom"></v-progress-linear>
</v-layout>
</v-container>
</template>
<script>

import { getProductosCategoria } from '../core/productos.js'

export default {
  data () {
    return {
      loadSuccess: true,
      items: []
    }
  },
  mounted: function () {
    var self = this
    self.loadSuccess = false
    getProductosCategoria(self, function (result) {
      self.items = result
      self.loadSuccess = true
    })
  }
}
</script>
