import { default as Calculadora } from './Calculadora.js';
;
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
