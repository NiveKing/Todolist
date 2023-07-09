import React from 'react'
import { useState } from 'react'
import AddTodos from './Components/addTodos'
import Todos from './Components/todos'
import './App.css'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>
    <div>
      <h1>TO DO LIST !</h1>
      <AddTodos taskList={taskList} setTaskList={setTaskList} />
      <Todos taskList={taskList} setTaskList={setTaskList}/>
    </div>
    </>
  )
}

export default App
