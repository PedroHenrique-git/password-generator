import gerarSenha from './geradores';

let p = document.querySelector('p');

let inputResultado = document.querySelector('#res');
let inputRange = document.querySelector('input[type=number]');
let inputNumber = document.querySelector('#addNumber');
let inputMaiuscula = document.querySelector('#addMaiusculas');
let inputMinuscula = document.querySelector('#addMinusculas');
let inputSimbolos = document.querySelector('#addSimbolos');
let button = document.querySelector('button');

const iniciar = () =>
{
        button.addEventListener('click',() =>{
        inputResultado.value = gerarSenha(
            inputRange.value,
            inputNumber.checked,
            inputMaiuscula.checked,
            inputMinuscula.checked,
            inputSimbolos.checked   
        )    
        });
}

export default iniciar;