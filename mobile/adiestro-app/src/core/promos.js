export const ENTRADA = 1
export const PROMO = 2

const urlPromociones = 'http://guemesrepublica.com.ar/api/promociones'
const urlMisPromociones = 'http://guemesrepublica.com.ar/api/mispromociones'

export function getPromos (self, req, callback) {
  var restUrl = urlPromociones
  for (var i = 0; i < req.length; i++) {
    restUrl += ((i === 0) ? '?' : '&') + req[i]
  }
  self.$http.get(restUrl, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
    callback(result.body.data)
  }, error => {
    callback(error.body)
  })
}

export function getPromo (self, req, callback) {
  var restUrl = urlPromociones + '/' + req
  self.$http.get(restUrl, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
    callback(result.body.data)
  }, error => {
    callback(error.body)
  })
}

export function getMiPromo (self, req, callback) {
  var restUrl = urlMisPromociones + '/' + req
  self.$http.get(restUrl, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
    callback(result.body)
  }, error => {
    callback(error.body)
  })
}

export function getMisPromos (self, req, callback) {
  var restUrl = urlMisPromociones
  for (var i = 0; i < req.length; i++) {
    restUrl += ((i === 0) ? '?' : '&') + req[i]
  }
  self.$http.get(restUrl, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
    callback(result.body.data)
  }, error => {
    callback(error.body)
  })
}

export function setMiPromo (self, req, callback) {
  var restUrl = urlMisPromociones
  self.$http.post(restUrl, req, { headers: { 'X-Requested-With': 'XMLhttpRequest' } }).then(result => {
    callback(result.body)
  }, error => {
    callback(error.body)
  })
}

export function getCountMisPromos (self, req, callback) {
  var restUrl = urlMisPromociones + '/count'
  self.$http.post(restUrl, req, { headers: { 'X-Requested-With': 'XMLhttpRequest' } }).then(result => {
    callback(result.body)
  }, error => {
    callback(error.body.message)
  })
}
