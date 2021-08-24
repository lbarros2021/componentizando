import React from "react"

import styled from "styled-components"

const Lista = styled.ul`
font-size: 35px;
color: red;
background-color: black;
`
const Itens = styled.li`
padding:5%
color: red;
`
const Title = styled.h1`
display:flex;
justify-content: center;
padding: 2%;
color: red;
`

function Footer() {
    return (
      <div>

           <Title>INFORMAÇOES</Title>
        
        <Lista>
            <Itens>
              Localização:C.R. Flamengo - Avenida Borges de Medeiros - Gávea, Município Rio de Janeiro - RJ
            </Itens>
            <li>
              Redes socias: 
              twitter:@Flamengo, 
              istagram: @flamengo 
            </li> 
        </Lista>
      </div>
    );
  }


  export default Footer ;