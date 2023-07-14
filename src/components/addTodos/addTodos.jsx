import { useState } from "react";

import "./addTodos.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const AddTodos = (props) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const submitTask = (e) => {
        e.preventDefault();
        if (input !== '') {
        setInput('');
        props.setTaskList([...props.taskList, input])
        }
    }

    return (
        <div id="addtodos">
            <form onSubmit={submitTask}>
                <Stack gap={1}>
                <Form.Control type="text" onChange={handleChange} value={input} placeholder="Let's Get Productive!"/>
                <Button variant="light" type="submit">Add Task</Button>
                </Stack>
            </form>
        </div>
    )

}

    {/* <div>
            <input type="text" onChange={handleChange} value={input} placeholder="Let's Get Productive!" />
            <button onClick={submitTask}>Add Task</button>
        </div> */}

export default AddTodos
