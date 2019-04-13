const urlNoticias = 'http://guemesrepublica.com.ar/api/noticias'

export function getNoticias (self, req, callback) {
  var restUrl = urlNoticias
  for (var i = 0; i < req.length; i++) {
    restUrl += ((i === 0) ? '?' : '&') + req[i]
  }
  self.$http.get(restUrl, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
    callback(result.body.data)
  }, error => {
    callback(error.body)
  })
}
