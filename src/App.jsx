import React from 'react'
import { useState } from 'react'
import AddTodos from './Components/addTodos'
import Todos from './Components/todos'

import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <div>
      <Stack className='d-flex align-items-center'>
      <h1>TO DO LIST !</h1>
      <AddTodos taskList={taskList} setTaskList={setTaskList} />
      <Todos taskList={taskList} setTaskList={setTaskList}/>
      </Stack>
    </div>
  )
}

export default App
