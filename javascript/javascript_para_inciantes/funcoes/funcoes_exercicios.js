// Crie uma função para verificar se um valor é Truthy
function itsTruth(parametro) {
    if(!!parametro) {
        console.log("É verdadeiro")
    } else {
        console.log("É falso")
    }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado, lado2, lado3, lado4) {
    const perimetro = lado + lado2 + lado3 + lado4

    console.log(perimetro)
}

perimetroQuadrado(1, 2, 3, 4)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(name, surname) {
    console.log(name, surname)
}

fullName('Wellington', 'Santos')

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(argumento) {
    console.log(typeof(argumento))
}

tipoDado("Wellington")


document.addEventListener('scroll', () => {
    console.log("Rolando o scroll")
})