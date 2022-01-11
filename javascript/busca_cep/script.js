const input = document.querySelector('.input');
const button = document.querySelector('.button-input')
const container = document.querySelector('.container-street')



function buscaCep () {
    
    function adicionarInfo(rua, cidade, bairro) {
        
        const p = document.createElement('p');
        p.innerText = `${rua}  ${cidade}  ${bairro}`;

        container.appendChild(p)
    }
    
    function buscarCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;

        const consulta = fetch(url)
        consulta.then(r => {
            r.json()

            .then(r => {
                const rua = r.logradouro
                const cidade = r.localidade
                const bairro = r.bairro

                adicionarInfo(rua, cidade, bairro)
                
            })
        })
        

    }

    function valorCep(e) {
        e.preventDefault();
        const cep = input.value;

        buscarCep(cep)
    }

    button.addEventListener('click', valorCep)
}

buscaCep()