import React, { useState, useRef } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'
import './styles.js'
import People from '../../img/logo.svg'
import SetaDireita from '../../img/setadireita.svg'

import H1 from "../../../components/Title";
import ContainerItens from "../../../components/ContainerItens"
import Button from "../../../components/Button"

import {
  Container,
  Img,
  InputLabel,
  Input,
  
} from "./styles.js"

function App () {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()


  async function addNewUser()  {

    const {data: newUser} = await axios.post("http://localhost:3001/users", {name: inputName.current.value, 
    age: inputAge.current.value})
    setUsers([...users, newUser,]);
    
    navigate("/usuarios")
  }

 
    
  

  return (
    <Container>
      <Img alt="logo" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} type="text" placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} type="number" placeholder="Idade" />


        <Button  onClick={addNewUser}>
          Cadastrar
          <img src={SetaDireita} alt="seta" />
        </Button>
        

      </ContainerItens>

    </Container>
  )

}

export default App;