//En esta función recibo el array de 4 colores, primero le quito el # a cada uno y luego los retorno unidos en un string


const filtrarFavoritos = (colores) => {
  let coloresFiltrados = []
  colores.forEach(element => {
    coloresFiltrados.push(element.slice(1))
      })
      return coloresFiltrados.join('')
}

export default filtrarFavoritos;