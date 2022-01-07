var pessoa = {
    nome : "Wellington",
    idade : 19,
    cidade : "Caraguatatuba",
    estado : "SP",
    lado : (perimetro) => {
        return perimetro * perimetro
    }
}

console.log(pessoa.lado(2))