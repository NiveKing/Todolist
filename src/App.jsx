import React from 'react'
import { useState } from 'react'
import AddTodos from './components/addTodos/addTodos'
import Todos from './components/todos/todos'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/app.css"
import Stack from 'react-bootstrap/Stack';

function App() {
  const [taskList, setTaskList] = useState([])

  return (
      <Stack gap={2} className="col-xl-5 mx-auto" id='app'>
          <div id='title'><h1>TO DO LIST !</h1></div>
          <AddTodos taskList={taskList} setTaskList={setTaskList} />
          <Todos taskList={taskList} setTaskList={setTaskList}/>
      </Stack>
  )
}

export default App
