import React from 'react';
import { Header } from './App.Style';
import {ContainerProdutos} from './App.Style'
import {CardProduto} from './App.Style'
import {Footer} from "./App.Style"

function App() {
  return (
    <div>
      <Header>
        <h1>esse é o header</h1>
      </Header>
      <ContainerProdutos   style={{
          backgroundImage: `url(${require('./img/background.jpg')})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          }}>
            <CardProduto>
                <h3>Produto aqui</h3>
            </CardProduto>
            <CardProduto>
                <h3>Produto aqui</h3>
            </CardProduto>
            <CardProduto>
                <h3>Produto aqui</h3>
            </CardProduto>
            <CardProduto>
                <h3>Produto aqui</h3>
            </CardProduto>
            <CardProduto>
                <h3>Produto aqui</h3>
            </CardProduto>
            <CardProduto>
                <h3>Produto aqui</h3>
            </CardProduto>
            <CardProduto>
                <h3>Produto aqui</h3>
            </CardProduto>
            <CardProduto>
                <h3>Produto aqui</h3>
            </CardProduto>
      </ContainerProdutos>
      <Footer>
        <h1>esse é o footer</h1>
      </Footer>



    </div>
  );
}

export default App;
