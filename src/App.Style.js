import styled from 'styled-components'

export const Header = styled.div `
display: flex;
background-color: darkgrey ;
justify-content: space-between;    /*separa os items*/
align-items: center;
grid-column: 1 / -1; /*é a forma de selecionar a linha toda*/
color: white;
height: 5vh;
width: 100%
`

export const ContainerProdutos =  styled.div `
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 100%;
flex-grow: 1;
height: 90vh;
`

export const CardProduto = styled.div `
align-items: center;
text-align: center;
border: 2px solid;
border-color: green;
margin: 10px;
width: 250px;
height: 300px;
border-radius: 25px;
color: white;
background-color: rgba(255, 255, 255, 0.2);
`

export const Footer = styled.div `
display: flex;
background-color: darkgrey ;
justify-content: space-between;    /*separa os items*/
align-items: center;
grid-column: 1 / -1; /*é a forma de selecionar a linha toda*/
color: white;
height: 5vh;
width: 100%
`