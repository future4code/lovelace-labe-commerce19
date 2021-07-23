import React from 'react'

import { Header, ContainerProdutos, CardProduto, Footer } from './Style'

export class Card extends React.Component {

    render() {
        return (
            < div >
                <Header>
                    <h1>esse é o header</h1>
                </Header>
                <ContainerProdutos style={{
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
            </div >
        );
    }
}