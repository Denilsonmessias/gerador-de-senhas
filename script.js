let slider = document.querySelector('#tam')
let button = document.querySelector('#button')

let size = document.querySelector('#valor')
let password = document.querySelector('#password')

let res = document.querySelector('#resultado')

let charset = 'abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789!@#$%&*()_'
let novaSenha = ''

// faz com que apareça o valor de caractere conforme mude a barra
size.innerHTML = slider.value
tam.oninput = function () {
    size.innerHTML = this.value
}

// função para gerar a senha quando apertar o botão 
function gerar() {
    let senha = ''
    for (let i = 0, n = charset.length; i < slider.value; ++i){ // let i COMEÇA EM ZERO; let n PEGA O TAMANHO DE TODOS CARACTERES NA VARIAVEL CHARSET; enquanto i for menor que o valor de caracteres definido no SLIDER; i++ vai fazer com que passe novamente nesse for até cehgar no limite de caractere
    senha += charset.charAt(Math.floor(Math.random() * n)) //senha += (faz com que adicione mais um na variavel senha até chegar no nro de carateres... ) CharArt (pega o nro na posicão desejada) Math.floor e random (faz com que pegue numeros aleatorios dentro da variavel charset)
    }
    res.classList.remove('hi') //chama a variavel que contém a classe 'hi' e remove essa classe fazendo com que apareça o resultado
    password.innerHTML = senha // faz com que apareça a senha gerada
    novaSenha = senha
}

// cria a função para copiar a senha 
function copiar(){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
    novaSenha = ''
}