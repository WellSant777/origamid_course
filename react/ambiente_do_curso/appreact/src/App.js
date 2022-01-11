import React from 'react';

  // Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    imagem : 'https://a-static.mlcdn.com.br/618x463/celular-samsung-galaxy-a-02-s-32gb-dual-sm-a025mzkvzto/gazinshop/9589/052ae7ff8a008d1e9724c2b6e9f71862.jpg',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    imagem : 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_13_9310/general/xps-13_black_open-up-left-v2.jpg?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=664&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=664,402',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    imagem : 'https://a-static.mlcdn.com.br/618x463/tablet-samsung-galaxy-tab-s6-lite-104-4g-wi-fi-64gb-android-10-octa-core-com-caneta-e-capa/magazineluiza/225366900/5655f07083ed4de6eb192bd0a6683d8c.jpg',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {

  const dados = produtos.filter(({preco}) => preco.replace('R$ ', ' '))
  console.log(dados)

  return (
    <>
      <section>
        
      </section>
    </>
  )
}


export default App;