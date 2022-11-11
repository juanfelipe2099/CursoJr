const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn-calcular');
const respuesta = document.querySelector('#respuesta1')



function btnOnClick(){
  const suma = parseInt(input1.value)+ parseInt(input2.value);
  respuesta.innerText = suma;
}