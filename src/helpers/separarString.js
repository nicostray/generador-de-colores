const separarString = (cadena) => {
    let cadenaProcesada = [];
    for(let i = 0;i<4;i++){
        cadenaProcesada.push(cadena.substring(i*6,i*6+6))
      }
    return cadenaProcesada
}

export default separarString;