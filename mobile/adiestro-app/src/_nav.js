export default {
  items: [
    {
      id: 2,
      title: 'RECOMENDAR',
      url: 'whatsapp://send?text=Descargate esta app de Güemes Republica! https://play.google.com/store/apps/details?id=com.treemind.guemesApp',
      redirect: true,
      icon: 'chat_bubble_outline'
    },
    {
      id: 3,
      title: 'PERFIL',
      url: '/perfil',
      redirect: true,
      icon: 'fas fa-user'
    },
    { divider: true },
    {
      id: 4,
      title: 'INFORMES',
      url: '/informes',
      redirect: false,
      icon: 'fas fa-graduation-cap'
    },
    {
      id: 5,
      title: 'NOTIFICACIONES',
      url: '/entrada',
      redirect: false,
      icon: 'notification_important'
    },
    {
      id: 6,
      title: 'ENVIAR MENSAJE',
      url: '/mensajesenviar',
      redirect: false,
      icon: 'message'
    },
    { divider: true },
    {
      id: 7,
      title: 'Instagram',
      url: 'https://www.instagram.com//',
      redirect: true,
      icon: 'fab fa-instagram'
    },
    {
      id: 8,
      title: 'Facebook',
      url: 'https://www.facebook.com//',
      redirect: true,
      icon: 'fab fa-facebook'
    },
    {
      id: 9,
      title: 'SALIR',
      url: '/logout',
      redirect: false,
      icon: 'close'
    }
  ]
}
