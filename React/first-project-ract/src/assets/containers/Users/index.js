import React, { useState,useEffect } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios'
import './styles.js'
import Pessoas from '../../img/Pessoas.svg'
import SetaDireita from '../../img/setadireita.svg'
import Lixeira from '../../img/lixeira.svg'


import H1 from "../../../components/Title";
import ContainerItens from "../../../components/ContainerItens"
import Button from "../../../components/Button"



import {
  Container,
  Img,
  User
} from "./styles.js"

function Users () {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()



  useEffect(() => {
    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }
    fetchUsers()
    
  }, [])

  async function deleteUser (userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)

  }

  function goBackPgae(){
    navigate("/")
  }


  return (
    <Container>
      <Img alt="logo" src={Pessoas} />
      <ContainerItens isBlur={true}>
        <H1>Usuarios</H1>

        <Button isBack={true} onClick={goBackPgae} >
          Voltar
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

        

      </ContainerItens>

    </Container>
  )

}

export default Users;