var videogames = ["Switch", "PS4", "Xbox"]

console.log(videogames[0])

videogames.pop()

console.log(videogames)

videogames.push('3DS')

console.log(videogames.length)



for (var numero = 0; numero < 10; numero++) {
    console.log(numero)
}


for (var i = 0; i < videogames.length; i++) {
    console.log(videogames[i])
}

videogames.forEach((item) => {
    console.log(item)
})

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let brWins = [1959, 1962, 1970, 1994, 2002]


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let i = 0; i < brWins.length; i++) {
    console.log(`O Brasil ganhou a copa de ${brWins[i]}`)
}


// Coloque a última fruta da array abaixo em uma variável,
// sem remover a mesma da array.

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

let ultimaFruta = frutas.pop();

console.log(ultimaFruta)