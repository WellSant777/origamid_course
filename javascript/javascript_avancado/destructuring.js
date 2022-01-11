const biblioteca = {
    livros : {
        digitais : {
            livros : ["Boa noite Renatinha", "Oi"]
        },
        fisicos : {

        }
    }
}

const {[1] : livro2} = biblioteca.livros.digitais.livros

console.log(livro2)