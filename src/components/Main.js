import React from "react"

import styled from "styled-components"

const Title = styled.h1`
display: flex;
justify-content:center;
padding:4% 
`


const Refrao = styled.p`
margin-left: 4%;
font-size:40px;
`

const Fla =  styled.div`
  display: flex;
  padding: 3%;
  flex-wrap:wrap;
  flex-direction:column;
  
`
const Fundo = styled.div`
background: Tomato;
`

function Main () { 
    return (
        <Fundo>
            <Title>FLAMENGO</Title>

            <Fla>
            <Refrao>
              Vamos, Flamengo.
              Vamos, ser campeões.
              Vamos, Flamengo.
            </Refrao>
            </Fla>

            <Fla>
            <Refrao>
              Minha maior paixão,
              Vamos, Flamengo
              E essa taça vamos conquistar.
            </Refrao>
            </Fla>
            
            <Fla>
            <Refrao>
              Vamos, Flamengo.
              Vamos ser campeões,
              Vamos, Flamengo
            </Refrao>
            </Fla>
           
           <Fla>
           <Refrao>
              Minha maior paixão,
              Vamos, Flamengo
              E essa taça vamos conquistar!
            </Refrao>
           </Fla>
        </Fundo>
    );
  }
  
  export default Main ;
  