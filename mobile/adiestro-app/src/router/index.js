import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout'

import Registrar from '@/views/Registrar'
import Splash from '@/views/Splash'
import Main from '@/views/Main'
import Informes from '@/views/Informes'
import Notificaciones from '@/views/Notificaciones'
import MensajesEnviar from '@/views/MensajesEnviar'
import Precios from '@/views/Precios'
import Login from '@/views/Login'
import Logout from '@/views/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/splash'
    },
    {
      path: '/',
      redirect: '/Main',
      name: 'Main',
      component: DefaultLayout,
      children: [
        {
          path: 'main',
          name: 'Main',
          component: Main
        }
      ]
    },
    {
      path: '/',
      redirect: '/Informes',
      name: 'Informes',
      component: DefaultLayout,
      children: [
        {
          path: 'informes',
          name: 'Informes',
          component: Informes
        }
      ]
    },
    {
      path: '/',
      redirect: '/MensajesEnviar',
      name: 'MensajesEnviar',
      component: DefaultLayout,
      children: [
        {
          path: 'mensajesenviar',
          name: 'MensajesEnviar',
          component: MensajesEnviar
        }
      ]
    },
    {
      path: '/',
      redirect: '/Notificaciones',
      name: 'Notificaciones',
      component: DefaultLayout,
      children: [
        {
          path: 'notificaciones',
          name: 'Notificaciones',
          component: Notificaciones
        }
      ]
    },
    {
      path: '/',
      redirect: '/Precios',
      name: 'Precios',
      component: DefaultLayout,
      children: [
        {
          path: 'precios',
          name: 'Precios',
          component: Precios
        }
      ]
    },
    {
      path: '/',
      redirect: '/login',
      name: 'Login',
      component: {
        render (c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    },
    {
      path: '/',
      redirect: '/logout',
      name: 'Logout',
      component: {
        render (c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: 'logout',
          name: 'Logout',
          component: Logout
        }
      ]
    },
    {
      path: '/',
      redirect: '/splash',
      name: 'Splash',
      component: {
        render (c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: 'splash',
          name: 'Splash',
          component: Splash
        }
      ]
    },
    {
      path: '/',
      redirect: '/registrar',
      name: 'Registrar',
      component: {
        render (c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: 'registrar',
          name: 'Registrar',
          component: Registrar
        }
      ]
    }
  ]
})
