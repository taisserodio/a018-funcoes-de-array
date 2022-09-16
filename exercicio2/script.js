// # Exercício 2
// Crie um array de números que contenha 8 números.

const numeros = [4,5,8,9,15,24,23] 
console.log(numeros)
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, 
//Crie uma `const triplos`, e guarde o valor do array nesta const;

const triplos = numeros.map((multiplique) => {
    return multiplique * 3
})
console.log("O array original foi multiplicado por 3:" , triplos)

// 2. A segunda deve retornar um novo array contendo os números divididos por 2. 
//Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = numeros.map((banana) => {
        return banana / 2
})
console.log("O array original foi dividido por 2:" , metades)
