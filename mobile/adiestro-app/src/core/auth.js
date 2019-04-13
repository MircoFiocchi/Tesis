const urlRegistro = 'http://guemesrepublica.com.ar/api/auth/signup'

export function regUser (self, data, callback) {
  self.$http.post(urlRegistro, data, { headers: { 'X-Requested-With': 'XMLhttpRequest' } }).then(result => {
    callback(result.body)
  }, error => {
    callback(error.body)
  })
}

export function logUserFb (self, data, callback) {
  self.$http.post('http://guemesrepublica.com.ar/api/auth/authfb', data, { headers: { 'content-type': 'application/json', 'X-Requested-With': 'XMLhttpRequest', 'Accept': 'application/json' } }).then(result => {
    callback(result.body)
  }, error => {
    callback(error.body)
  })
}

export function logUser (self, data, callback) {
  self.$http.post('http://guemesrepublica.com.ar/api/auth/login', data, { headers: { 'content-type': 'application/json', 'X-Requested-With': 'XMLhttpRequest' } }).then(result => {
    callback(result.body)
  }, error => {
    callback(error.body)
  })
}

export function verUserFb (self, data, callback) {
  self.$http.post('http://guemesrepublica.com.ar/api/auth/userfb', data, { headers: { 'content-type': 'application/json', 'X-Requested-With': 'XMLhttpRequest', 'Accept': 'application/json' } }).then(result => {
    callback(result.body.message)
  }, error => {
    callback(error.body.message)
  })
}

export function verUser (self, callback) {
  self.$http.get('http://guemesrepublica.com.ar/api/auth/user').then(result => {
    callback(result.body)
  }, error => {
    callback(error.body.message)
  })
}
