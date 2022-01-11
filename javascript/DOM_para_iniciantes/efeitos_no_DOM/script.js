function main() {
    const imgComputer = document.querySelector('.img-computer');
    let container = document.querySelector('.container');

    mostrarCliques = (e) => {
        e.preventDefault()

        e.target.classList.add('ativo')

        console.log(e.target)
        container.innerHTML += '<h1>Olá, você clicou na imagem!</h1>'
    }

    imgComputer.addEventListener('click', mostrarCliques)

}

main()