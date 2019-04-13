const urlProductos = 'http://guemesrepublica.com.ar/api/productos'
const urlCategorias = 'http://guemesrepublica.com.ar/api/productos/categorias'

export function getProductosCategoria (self, callback) {
  var productos = []
  var categorias = []
  self.$http.get(urlProductos, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
    productos = result.body.data
    self.$http.get(urlCategorias, {}, { headers: { 'Accept': 'application/json' } }).then(result => {
      categorias = result.body.data
      categorias.forEach(function (categoria, i) {
        categorias[i].items = []
        productos.forEach(function (producto, j) {
          if (producto.id_categoria === categoria.id) {
            categorias[i].items.push(producto)
          }
        })
      })
      callback(categorias)
    }, error => {
      callback(error.body)
    })
  }, error => {
    callback(error.body)
  })
}
