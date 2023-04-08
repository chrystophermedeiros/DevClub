import React from "react";
import './styles.js'
import People from './assets/img/logo.svg'
import SetaDireita from './assets/img/setadireita.svg'


import {
  Container,
  Img,
  Containeritens,
  H1,
  InputLabel,
  Input,
  Button
} from "./styles.js"

const App = () => {

  return (
    <Container>
      <Img alt="logo"  src={People}/>
      <Containeritens>
      <H1>Olá</H1>
      <InputLabel>Nome</InputLabel>
      <Input type="text" placeholder="Nome"/>
     
      <InputLabel>Idade</InputLabel>
      <Input type="number" placeholder="Idade"/>

      
      <Button>
        Cadastrar
        <img src={SetaDireita} alt="seta" />

      </Button>

      </Containeritens>
     
    </Container>
  )

}

export default App