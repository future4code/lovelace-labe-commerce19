import React from 'react'
import { Header, ContainerProdutos, CardProduto, Footer } from './Style'

export class Card extends React.Component {

    state = {
        produtos: [
            {
                id: 1,
                nome: "Bola espacial",
                valor: 50.0,
                imageUrl: "https://picsum.photos/200/200",
                tipo: "brinquedo",
            },

            {
                id: 2,
                nome: "Camseta Triangulo",
                valor: 100.0,
                imageUrl: "https://picsum.photos/200/200",
                tipo: "camiseta",
            }
        ],
    }

    mostraProdutos = () => {

    }

    render() {
        return (
            <div>
                <Header>
                    <h1>Eu sou um header</h1>
                </Header>

                <ContainerProdutos style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>

                    {pegaImagem}
                    <CardProduto produtos={mostraProdutos} >
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
}
