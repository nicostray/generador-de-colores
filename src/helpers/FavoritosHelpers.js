// import React,{ useState} from 'react'
// import filtrarFavoritos from './filtrarFavoritos';
// import toastNotify from './toastNotify';

// const FavoritosHelpers = () => {

//     // const verificarLocalStorage = () =>{
//     //     if(window.localStorage.getItem('favoritos') === null){
//     //       window.localStorage.setItem('favoritos','')
//     //     }
//     //     return window.localStorage.getItem('favoritos')
//     //   }

//     // const [favoritos,setFavoritos] = useState (verificarLocalStorage().split(",")); //acá guardo el state con los favoritos

//     // const agregarAFavoritos = (colores) => {
//     //     const favoritosActuales = [window.localStorage.getItem('favoritos')]
//     //     favoritosActuales.push(filtrarFavoritos(colores))
//     //     window.localStorage.setItem('favoritos', favoritosActuales)
//     //     toastNotify('Guardado en favoritos ⭐', "favorito")
//     //   }

//     const eliminarFavoritos = () => {
//         window.localStorage.setItem('favoritos','')
//         setFavoritos([''])
//       }

//       const borrarColorLocalStorage = (cadena) => {
//         setFavoritos(favoritos.filter(element => element !== cadena))
//         window.localStorage.setItem('favoritos',favoritos)
//       }

  
// }
// export default FavoritosHelpers;