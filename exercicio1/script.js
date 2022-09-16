const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// # Exercício 1
// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em 
//CAIXA ALTA.
//funçao chamada maiuscula      (cadeira)=representa o paramentro da minha função
function maiuscula (cadeira) {
    objeto.nome = objeto.nome.toLocaleUpperCase()
    objeto.profissao = objeto.profissao.toLocaleUpperCase()
    objeto.username = objeto.username.toLocaleUpperCase()
    objeto.senha = objeto.senha.toLocaleUpperCase()
    return objeto
}
console.log(maiuscula(objeto))

// 2. A segunda deve retornar os valores do objeto como texto corrido.

function textoCorrido(parametro){
    return objeto.nome + ' ' + objeto.profissao + ' ' + objeto.username + ' ' + objeto.senha + ' '
}
console.log(textoCorrido(objeto))


//3.Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
//A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2


//Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. 
function objCallBack (obj, func){
    let resultado = func(obj) //A funcão deve passar o objeto como argumento da funcão de callback,
    return resultado //e em seguida imprimir o valor retornado.
}

console.log(objCallBack(objeto,textoCorrido))
console.log(objCallBack(objeto,maiuscula))

//   //teste Arrow Function
//   const calcularArea = (altura,largura) => {
//     const area = altura*largura;
//    return area
//   }

//  console.log(calcularArea(3,2))


 
//  // teste2 function(função normal)
// function calcularArea1 (altura,largura) {
//     const area = altura*largura;
//    return area
//   }

//  console.log(calcularArea1(3,4))