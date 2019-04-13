const urlListaCumple = 'http://guemesrepublica.com.ar/api/listacumple'

export function getListaCumple (self, req, callback) {
  var restUrl = urlListaCumple
  for (var i = 0; i < req.length; i++) {
    restUrl += ((i === 0) ? '?' : '&') + req[i]
  }
  self.$http.get(restUrl, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
    callback(result.body.data)
  }, error => {
    callback(error.body)
  })
}

export function setListaCumple (self, req, callback) {
  var restUrl = urlListaCumple
  self.$http.post(restUrl, req, { headers: { 'X-Requested-With': 'XMLhttpRequest' } }).then(result => {
    callback(result.body)
  }, error => {
    callback(error.body)
  })
}

export function getMiCupon (self, code, user, callback) {
  var restUrl = urlListaCumple + '/' + code + '/user/' + user
  self.$http.get(restUrl, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
    callback(result.body.data)
  }, error => {
    callback(error.body)
  })
}

export function getCountMisCupones (self, req, callback) {
  var restUrl = urlListaCumple + '/count'
  self.$http.post(restUrl, req, { headers: { 'X-Requested-With': 'XMLhttpRequest' } }).then(result => {
    callback(result.body)
  }, error => {
    callback(error.body.message)
  })
}
