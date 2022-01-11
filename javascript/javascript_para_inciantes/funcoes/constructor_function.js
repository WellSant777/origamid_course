function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

const fiat = new Carro("Fiat", "Uno")

fiat.preco = 32000;

fiat.buzinar = () => {
    console.log("Biiiiiiiii")
}

fiat.buzinar()