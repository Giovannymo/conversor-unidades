export default class Calculadora {

  constructor(unidad){
    this.unidad = unidad,
    this.resultado = 0
  }

  set nuevaUnidad(unidad){
    this.unidad = unidad;
  }

  get nuevaUnidad(){
    return this.unidad;
  }

  set nuevoResultado(resultado){
    this.resultado = resultado
  }

  get nuevoResultado(){
    return this.resultado;
  }

  convertirTemperatura(){
      return this.resultado = ((this.unidad * (9/5))+ 32)
  }

  convertirDistancia(){
    return this.resultado =  (this.unidad * 3.281)
  }



}