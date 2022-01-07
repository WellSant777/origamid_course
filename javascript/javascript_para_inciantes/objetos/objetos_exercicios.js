// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const pessoa = {
    nome : "Welington",
    sobrenome : "Santos",
    idade : 19,
    nomeCompleto(nome, sobrenome) {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto())

// Crie um método no objeto anterior, que mostre o seu nome completo


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  

  carro.preco = 3000

  console.log(carro.preco)
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
let verHomem = false;
let cachorro = {
    raca : "labrador",
    cor : "preto",
    idade : 10,
    latir() {
        if(verHomem) {
            console.log("Auau")
        }
        else {
            console.log("Não viu homem!")
        }
    }
}

cachorro.latir()