import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { Container, ContainerItens, Input, Button, ListItens, Deletar } from './styles.jsx';
import { FcCheckmark, FcExpired } from "react-icons/fc";

function App() {
  const [list, setList] = useState([]);
  const [tarefa, setTarefa] = useState('')



  function inputMudou(event) {
    setTarefa(event.target.value)
  }

  function adcionarTarefa() {
    tarefa ? setList([...list, { id: uuidv4(), tarefa, concluida: false }]) : alert("Escreva uma tarefa antes de adcionar")
  }

  function buscarTarefas() {
    const tarefasFiltradas = list.filter((item) => item.tarefa.toLowerCase().includes(tarefa.toLowerCase()));
    setList(tarefasFiltradas)

  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, concluida: !item.concluida } : item
    ))

    setList(newList)

  }

  function deletarTarefa(id) {
    const newLits = list.filter(item => item.id !== id)

    setList(newLits)

  }

  function lidarComKeyDown(event) {
    if (event.key === 'Enter') {
      adcionarTarefa()
    }
  }

  return (

    <Container>
      <ContainerItens >
        <Input

          onChange={inputMudou}
          onKeyDown={lidarComKeyDown}
          placeholder="Digite uma tarefa"
          type="text"

        />

        <Button onClick={adcionarTarefa}>Adcionar</Button>


        <Button onClick={buscarTarefas} >Buscar</Button>
        <ul>
          {list.length > 0 ? (
            list.map(item => (
              <ListItens className='elemento' key={item.id} Concluido={item.concluida}  >
                <li >
                  {item.concluida ? (<FcCheckmark onClick={() => finalizarTarefa(item.id)} />
                  ) : (
                    <FcExpired onClick={() => finalizarTarefa(item.id)} />
                  )}
                  {item.tarefa} <Deletar onClick={() => deletarTarefa(item.id)} /> </li>
              </ListItens>

            ))
          )

            : (
              <h3> Não há itens na lista </h3>
            )
          }


        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App
