import React from 'react'
import { useState } from 'react'
import AddTodos from './Components/addTodos'
import Todos from './Components/todos'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app.css"
import Stack from 'react-bootstrap/Stack';

function App() {
  const [taskList, setTaskList] = useState([])

  return (
      <Stack className='d-flex align-items-center'>
          <h1>TO DO LIST !</h1>
          <AddTodos taskList={taskList} setTaskList={setTaskList} />
          <Todos id="todos" taskList={taskList} setTaskList={setTaskList}/>
      </Stack>
  )
}

export default App
