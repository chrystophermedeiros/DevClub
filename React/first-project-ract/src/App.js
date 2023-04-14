import React, { useState, useRef } from "react";
import axios from 'axios'
import './styles.js'
import People from './assets/img/logo.svg'
import SetaDireita from './assets/img/setadireita.svg'
import Lixeira from './assets/img/lixeira.svg'


import {
  Container,
  Img,
  Containeritens,
  H1,
  InputLabel,
  Input,
  Button,
  User
} from "./styles.js"

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser()  {

    const data = await axios.post("http://localhost:3001/users", {name: inputName.current.value, 
    age: inputAge.current.value})

    console.log(data);

    // setUsers([
    //   ...users, 
    //   {
    //      id: Math.random(), 
    //      name: inputName.current.value, 
    //      age: inputAge.current.value, 
    //     },
    //   ]);
  }

  function deleteUser (userId) {
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)

  }


  return (
    <Container>
      <Img alt="logo" src={People} />
      <Containeritens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} type="text" placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} type="number" placeholder="Idade" />


        <Button onClick={addNewUser}>
          Cadastrar
          <img src={SetaDireita} alt="seta" />
        </Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Lixeira} alt="lixeira" /></button>
            </User>
          ))}
        </ul>

      </Containeritens>

    </Container>
  )

}

export default App;