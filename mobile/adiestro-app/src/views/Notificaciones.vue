<template>
  <v-container pa-0 class="secondary darken-1">
    <v-layout row wrap fill-height  >
      <v-flex xs12 pa-0 >
        <v-tabs
        centered
        dark
        icons-and-text
        class="mt-x tabs-informe"
        grow
        >
        <v-tabs-slider color="accent"></v-tabs-slider>

        <v-tab href="#tab1">
          Notificaciones
          <v-icon>notification_important</v-icon>
        </v-tab>

        <v-tab href="#tab2">
          Preceptoría
          <v-icon>email</v-icon>
        </v-tab>

        <v-tab href="#tab3">
          Mensajes
          <v-icon>message</v-icon>
        </v-tab>

        <v-tab-item
        value="tab1"
        >
        <v-card light flat class="full-height">
          <v-card-text>
            <h3 class="title font-weight-light my-2">Notificaciones</h3>
            <v-list two-line>
              <template v-for="(item, index) in noticias">
                <v-list-tile
                class="mt-1"
                v-if="item.id"
                :key="item.id"
                >
                <v-list-tile-content>
                  <v-list-tile-sub-title v-html="item.fecha"></v-list-tile-sub-title>
                  <v-list-tile-title class="font-weight-bold" v-html="item.asunto"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
              ></v-divider>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
      value="tab2"
      >
      <v-card light flat class="full-height">
        <v-card-text>
          <h3 class="title font-weight-light my-2">Preceptoría</h3>
          <v-list two-line>
            <template v-for="(item, index) in noticias">
              <v-list-tile
              class="mt-1"
              v-if="item.id"
              :key="item.id"
              >
              <v-list-tile-content>
                <v-list-tile-sub-title v-html="item.fecha"></v-list-tile-sub-title>
                <v-list-tile-title class="font-weight-bold" v-html="item.asunto"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
            ></v-divider>
          </v-list>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item
    value="tab3"
    >
    <v-card light flat class="full-height">
      <v-card-text>
        <h3 class="title font-weight-light my-2">Mensajes Directos</h3>
        <v-list two-line>
          <template v-for="(item, index) in noticias">
            <v-list-tile
            class="mt-1"
            v-if="item.id"
            :key="item.id"
            avatar
            >
            <v-list-tile-content>
              <v-list-tile-sub-title v-html="item.fecha"></v-list-tile-sub-title>
              <v-list-tile-title v-html="item.nombre"></v-list-tile-title>
              <v-list-tile-title class="font-weight-bold" v-html="item.asunto"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
          ></v-divider>
        </v-list>
      </v-card-text>
      <v-btn
              fixed
              dark
              fab
              bottom
              right
              color="green"
              href="#/mensajesenviar"
            >
              <v-icon>  message</v-icon>
    </v-card>
  </v-tab-item>
</v-tabs>
</v-flex>
</v-layout>
</v-container>
</template>
<script>

export default {
  components: {
  },
  data: () => ({
    noticias: [
      {
        id: 1,
        asunto: 'Asunto del mensaje',
        nombre: 'Matias Miranda - Profesor',
        fecha: '12 de febrero de 2019'
      },
      { divider: true, inset: false },
      {
        id: 2,
        asunto: 'Asunto del mensaje',
        nombre: 'Pedro Spinetti - Director',
        fecha: '11 de febrero de 2019'
      },
      { divider: true, inset: false },
      {
        id: 3,
        asunto: 'Asunto del mensaje',
        nombre: 'Mark Gonzalez - Preceptor',
        fecha: '10 de febrero de 2019'
      }
    ]
  }),
  props: {
  },
  computed: {
  },
  methods: {
    formatDate (date) {
      if (!date) return null

      const [fecha, time] = date.split(' ')
      const [year, month, day] = fecha.split('-')
      return `${day}/${month}/${year} ${time}`
    }
  }
}
</script>
