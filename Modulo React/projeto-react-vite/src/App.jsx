import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { Container } from './styles.js';

function App() {
  const [list, setList] = useState([]);
  const [tarefa, setTarefa] = useState ('')



function inputMudou(event) {
  setTarefa(event.target.value)
}

function ClickButton() {
  setList([...list, {id: uuidv4(), tarefa}])

}
  
  return (

    <Container>
      <input onChange={inputMudou} placeholder="Digite uma tarefa" type="text" />
      <button onClick={ClickButton}>Adcionar</button>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.tarefa} </li>
        ))}
      </ul>
    </Container>
  )
}

export default App
