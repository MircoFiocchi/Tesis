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
          Materias
          <v-icon>fas fa-clipboard-list</v-icon>
        </v-tab>

        <v-tab href="#tab2">
          Asistencia
          <v-icon>fas fa-calendar-check</v-icon>
        </v-tab>

        <v-tab href="#tab3">
          Disciplina
          <v-icon>fas fa-thumbs-down</v-icon>
        </v-tab>

        <v-tab-item
        value="tab1"
        >
        <v-card flat>
          <v-card-text>
            <h3 class="title font-weight-light my-4">Notas 2019</h3>
            <v-data-table
            :headers="headersnotas"
            :items="notas"
            item-key="materia"
            class="elevation-2"
            hide-actions
            >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.materia }}</td>
              <td class="text-xs-center">{{ props.item.mar }}</td>
              <td class="text-xs-center">{{ props.item.abr }}</td>
              <td class="text-xs-center">{{ props.item.may }}</td>
              <td class="text-xs-center black">{{ props.item.prom1 }}</td>
              <td class="text-xs-center">{{ props.item.jun }}</td>
              <td class="text-xs-center">{{ props.item.jul }}</td>
              <td class="text-xs-center">{{ props.item.ago }}</td>
              <td class="text-xs-center black">{{ props.item.prom2 }}</td>
              <td class="text-xs-center">{{ props.item.sep }}</td>
              <td class="text-xs-center">{{ props.item.oct }}</td>
              <td class="text-xs-center">{{ props.item.nov }}</td>
              <td class="text-xs-center black">{{ props.item.prom3 }}</td>
            </template>
          </v-data-table>
          <h3 class="title font-weight-light my-4">Materias adeudadas</h3>
          <v-data-table
          :headers="headersdeudas"
          :items="deudas"
          item-key="materiad"
          class="elevation-2"
          hide-actions
          >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.materiad }}</td>
            <td class="text-xs-center">{{ props.item.curso }}</td>
            <td class="text-xs-center">{{ props.item.condicion }}</td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-tab-item>
  <v-tab-item
  value="tab2"
  >
  <v-card flat>
    <v-card-text>
      <h3 class="title font-weight-light my-4">Inasistencias 2019</h3>
      <v-data-table
      :headers="headersasist"
      :items="faltas"
      item-key="tipo"
      class="elevation-2"
      hide-actions
      >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.tipo }}</td>
        <td class="text-xs-center">{{ props.item.amar }}</td>
        <td class="text-xs-center">{{ props.item.aabr }}</td>
        <td class="text-xs-center">{{ props.item.amay }}</td>
        <td class="text-xs-center">{{ props.item.ajun }}</td>
        <td class="text-xs-center">{{ props.item.ajul }}</td>
        <td class="text-xs-center">{{ props.item.aago }}</td>
        <td class="text-xs-center">{{ props.item.asep }}</td>
        <td class="text-xs-center">{{ props.item.aoct }}</td>
        <td class="text-xs-center">{{ props.item.anov }}</td>
        <td class="text-xs-center black">{{ props.item.total }}</td>
      </template>
    </v-data-table>
  </v-card-text>
</v-card>
</v-tab-item>
<v-tab-item
value="tab3"
>
<v-card flat>
  <v-card-text>
    <h3 class="title font-weight-light my-4">Disciplina 2019</h3>
    <v-data-table
    :headers="headersdis"
    :items="amonestaciones"
    item-key=""
    class="elevation-2"
    hide-actions
    >
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.dmar }}</td>
      <td class="text-xs-center">{{ props.item.dabr }}</td>
      <td class="text-xs-center">{{ props.item.dmay }}</td>
      <td class="text-xs-center">{{ props.item.djun }}</td>
      <td class="text-xs-center">{{ props.item.djul }}</td>
      <td class="text-xs-center">{{ props.item.dago }}</td>
      <td class="text-xs-center">{{ props.item.dsep }}</td>
      <td class="text-xs-center">{{ props.item.doct }}</td>
      <td class="text-xs-center">{{ props.item.dnov }}</td>
      <td class="text-xs-center black">{{ props.item.totald }}</td>
    </template>
  </v-data-table>
</v-card-text>
</v-card>
</v-tab-item>
</v-tabs>
</v-flex>
</v-layout>
</v-container>
</template>
<script>

export default {
  name: 'Informes',
  components: {
  },
  data: () => ({
    headersnotas: [
      {
        text: 'Materia',
        align: 'left',
        value: 'materia'
      },
      { text: 'MAR', value: 'mar' },
      { text: 'ABR', value: 'abr' },
      { text: 'MAY', value: 'may' },
      { text: 'Prom. 1ºT', value: 'prom1' },
      { text: 'JUN', value: 'jun' },
      { text: 'JUL', value: 'jul' },
      { text: 'AGO', value: 'ago' },
      { text: 'Prom. 2ºT', value: 'prom2' },
      { text: 'SEP', value: 'sep' },
      { text: 'OCT', value: 'oct' },
      { text: 'NOV', value: 'nov' },
      { text: 'Prom. 3ºT', value: 'prom3' }
    ],
    notas: [
      {
        materia: 'Historia',
        mar: 6,
        abr: 7,
        may: 8,
        prom1: 7,
        jun: 6,
        jul: 7,
        ago: 8,
        prom2: 7,
        sep: 6,
        oct: 7,
        nov: 8,
        prom3: 7
      },
      {
        materia: 'Matemática',
        mar: 6,
        abr: 7,
        may: 8,
        prom1: 7,
        jun: 6,
        jul: 7,
        ago: 8,
        prom2: 7,
        sep: 6,
        oct: 7,
        nov: 8,
        prom3: 7
      },
      {
        materia: 'Inglés',
        mar: 6,
        abr: 7,
        may: 8,
        prom1: 7,
        jun: 6,
        jul: 7,
        ago: 8,
        prom2: 7,
        sep: 6,
        oct: 7,
        nov: 8,
        prom3: 7
      },
      {
        materia: 'Bases de datos',
        mar: 6,
        abr: 7,
        may: 8,
        prom1: 7,
        jun: 6,
        jul: 7,
        ago: 8,
        prom2: 7,
        sep: 6,
        oct: 7,
        nov: 8,
        prom3: 7
      },
      {
        materia: 'Formación en ambientes de trabajo',
        mar: 6,
        abr: 7,
        may: 8,
        prom1: 7,
        jun: 6,
        jul: 7,
        ago: 8,
        prom2: 7,
        sep: 6,
        oct: 7,
        nov: 8,
        prom3: 7
      }
    ],
    headersdeudas: [
      {
        text: 'Materia',
        align: 'left',
        value: 'materiad'
      },
      { text: 'Curso', value: 'curso', sortable: false },
      { text: 'Condición', value: 'condicion', sortable: false }
    ],
    deudas: [
      {
        materiad: 'Historia',
        curso: '6ºC',
        condicion: 'Tercer Materia'
      }
    ],
    headersasist: [
      {
        text: '',
        align: 'left',
        value: 'tipo',
        sortable: false
      },
      { text: 'MAR', value: 'amar', sortable: false },
      { text: 'ABR', value: 'aabr', sortable: false },
      { text: 'MAY', value: 'amay', sortable: false },
      { text: 'JUN', value: 'ajun', sortable: false },
      { text: 'JUL', value: 'ajul', sortable: false },
      { text: 'AGO', value: 'aago', sortable: false },
      { text: 'SEP', value: 'asep', sortable: false },
      { text: 'OCT', value: 'aoct', sortable: false },
      { text: 'NOV', value: 'anov', sortable: false },
      { text: 'Total', value: 'total', sortable: false }
    ],
    faltas: [
      {
        tipo: 'Justificadas',
        amar: 1,
        aabr: 2,
        amay: 1,
        ajun: 0,
        ajul: 1,
        aago: 1,
        asep: 1,
        aoct: 2,
        anov: 1,
        total: 10
      },
      {
        tipo: 'Injustificadas',
        amar: 1,
        aabr: 2,
        amay: 1,
        ajun: 0,
        ajul: 1,
        aago: 1,
        asep: 1,
        aoct: 2,
        anov: 1,
        total: 10
      }
    ],
    headersdis: [
      { text: 'MAR', value: 'dmar', sortable: false },
      { text: 'ABR', value: 'dabr', sortable: false },
      { text: 'MAY', value: 'dmay', sortable: false },
      { text: 'JUN', value: 'djun', sortable: false },
      { text: 'JUL', value: 'djul', sortable: false },
      { text: 'AGO', value: 'dago', sortable: false },
      { text: 'SEP', value: 'dsep', sortable: false },
      { text: 'OCT', value: 'doct', sortable: false },
      { text: 'NOV', value: 'dnov', sortable: false },
      { text: 'Total', value: 'totald', sortable: false }
    ],
    amonestaciones: [
      {
        dmar: 1,
        dabr: 2,
        dmay: 1,
        djun: 0,
        djul: 1,
        dago: 1,
        dsep: 1,
        doct: 2,
        dnov: 1,
        totald: 10
      }
    ]
  }),
  props: {
  },
  computed: {
  }
}
</script>
