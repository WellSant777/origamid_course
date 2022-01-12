import React from 'react'

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

function App() {
  const dados = mario;

  const total = dados.compras.map((item) => Number(item.preco.replace("R$ ", " ")),
  ).reduce((a, b) => a + b)
  
  return (
    <>
      <p>Nome : {dados.cliente}</p>
      <p>Idade : {dados.idade}</p>
      <p>Preço : {total}</p>
      <p style={{ color : dados.ativa ? 'blue' : 'red'}}>Atividade : {dados.ativa ? 'Ativo' : 'Inativo'}</p>
    </>
  );
}

export default App;
