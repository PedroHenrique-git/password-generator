import gerarSenha from './geradores';

const p = document.querySelector('p');

const inputResultado = document.querySelector('#res');
const inputRange = document.querySelector('input[type=number]');
const inputNumber = document.querySelector('#addNumber');
const inputMaiuscula = document.querySelector('#addMaiusculas');
const inputMinuscula = document.querySelector('#addMinusculas');
const inputSimbolos = document.querySelector('#addSimbolos');
const button = document.querySelector('button');

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