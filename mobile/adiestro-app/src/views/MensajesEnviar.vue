<template>
  <v-container pa-0 class="secondary darken-1">
    <v-layout row wrap fill-height class="mt-x" >
      <v-flex xs12 pa-0 >
        <v-toolbar dark color="primary" >
          <v-toolbar-title class="white--text">Nuevo Mensaje</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon href="#/notificaciones">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card light flat class="full-height">
          <v-card-text>

            <template>
              <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              >
              <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Buscar remitente"
              required
              ></v-text-field>

              <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Asunto"
              required
              ></v-text-field>
              <v-textarea
              v-model="mensaje"
              :rules="mensajeRules"
              solo
              label="Mensaje"
              value=""
              ></v-textarea>

              <v-btn
              :disabled="!valid"
              color="success"
              @click="validate"
              >
              Enviar
            </v-btn>

            <v-btn
            color="error"
            @click="reset"
            >
            Cancelar
          </v-btn>

        </v-form>
      </template>
    </v-card-text>
  </v-card>
</v-flex>
</v-layout>
</v-container>
</template>
<script>

export default {
  name: 'MensajesEnviar',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Seleccione a quien va enviar el mensaje'
    ],
    asunto: '',
    asuntoRules: [
      v => !!v || 'Escriba un asunto'
    ]
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
