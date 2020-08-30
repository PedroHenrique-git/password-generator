const numeros = [0,1,2,3,4,5,6,7,8,9];

const letrasMaiusculas = ['A','B','C','D','E','F','G',
                        'H','I','J','K','L','M','N',
                        'O','P','Q','R','S','T','U',
                        'V','W','X','Y','Z'];

const letrasMinusculas = ['a','b','c','d','e','f','g',
                        'h','i','j','k','l','m','n',
                        'o','p','q','r','s','t','u',
                        'v','w','x','y','z'];

const simbolos = ['!','@','#','$','%','*','(',')','-','>','<'];

const rand = (min,max) => Math.floor(Math.random() * (max - min) + min);
const geraNumeros = () => numeros[rand(0,numeros.length)];
const geraMaiusculas = () => letrasMaiusculas[rand(0,letrasMaiusculas.length)];
const geraMinusculas = () => letrasMinusculas[rand(0,letrasMinusculas.length)]
const geraSimbolos = () => simbolos[rand(0,simbolos.length)];

const gerarSenha = function(qtd,numero,maiuscula,minuscula,simbolo){
    let senha = [];
    for(let i=0;i<qtd;i++){
        numero && senha.push(geraNumeros());
        maiuscula && senha.push(geraMaiusculas());
        minuscula && senha.push(geraMinusculas());
        simbolo && senha.push(geraSimbolos());    
    }
    return senha.join('').slice(0,qtd);
}

export default gerarSenha;
