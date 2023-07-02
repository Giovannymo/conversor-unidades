import { default as Calculadora } from './Calculadora.js';

//Temperatura 

const $txtCelsius = document.getElementById("txtCelsius");
const $txtFahrenheit = document.getElementById("txtFahrenheit")

$txtCelsius.addEventListener('keyup', temperatura)

function temperatura(){
  let unidad = $txtCelsius.value

  const calculadora = new Calculadora(unidad)
  calculadora.convertirTemperatura();

  $txtFahrenheit.value = calculadora.resultado;
}

//Distancia 

const $txtMetros = document.getElementById("txtMetros");
const $txtPies = document.getElementById("txtPies")


$txtMetros.addEventListener('keyup', distancia)

function distancia(){

  let unidad = $txtMetros.value

  const calculadora = new Calculadora(unidad)

  calculadora.convertirDistancia()
  $txtPies.value = calculadora.resultado;
}


//Peso

const $txtKilogramos = document.getElementById("txtKilogramos")
const $txtLibras = document.getElementById("txtLibras")

$txtKilogramos.addEventListener('keyup', peso)

function peso(){
  let unidad = $txtKilogramos.value
  const calculadora = new Calculadora(unidad)
  calculadora.convertirPeso()
  $txtLibras.value = calculadora.resultado
}
