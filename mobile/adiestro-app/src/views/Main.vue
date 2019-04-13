<template>
  <v-container pa-0 class="black">
    <v-layout row wrap fill-height  >
      <v-flex xs12 sm8 pa-0 >
        <template>
          <v-card class="noticias-main">
            <v-card-title primary-title>
              <div>
                <h2>COMUNICADOS</h2>
              </div>
            </v-card-title>
            <v-list two-line>
              <template v-for="(item, index) in noticias">
                <v-list-tile
                class="mt-1"
                v-if="item.id"
                :key="item.id"
                >
                <v-list-tile-content>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
              ></v-divider>

            </template>
          </v-list>
        </v-card>
      </template>
    </v-flex>
    <v-flex class="black" xs12 sm4>
      <v-btn class="green darken-4 btn-big"  block flat my-0 v-on:click="redirect('promos')"><v-icon dark left>fas fa-graduation-cap</v-icon>INFORMES</v-btn>
      <v-btn class="red darken-4 btn-big" block flat my-0 v-on:click="redirect('entrada')"><v-icon dark left>fas fa-envelope</v-icon>NOTIFICACIONES</v-btn>
      <v-btn class="teal darken-4 btn-big" block flat my-0 v-on:click="redirect('precios')"><v-icon dark left>fas fa-comment-alt</v-icon>ENVIAR MENSAJE</v-btn>
    </v-flex>
  </v-layout>
  <v-progress-linear v-if="!loadSuccess" :indeterminate="true" class="fixed-bottom"></v-progress-linear>
</v-container>
</template>

<script>

export default {
  name: 'Main',
  components: {
  },
  data: () => ({
    loadSuccess: true,
    noticias: [
      {
        id: 1,
        title: 'Titulo de la noticia corto',
        subtitle: '12 de febrero de 2019'
      },
      { divider: true, inset: false },
      {
        id: 2,
        title: 'Titulo de la noticia un poco mas largo',
        subtitle: '11 de febrero de 2019'
      },
      { divider: true, inset: false },
      {
        id: 3,
        title: 'Titulo de la noticia mucho mas largo para ver como queda',
        subtitle: '10 de febrero de 2019'
      }
    ]
  }),
  props: {
  },
  methods: {
    redirect (url) {
      this.$router.push('/' + url)
    }
  }
}

</script>
