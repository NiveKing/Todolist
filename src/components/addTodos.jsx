import { useState } from "react";

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
        <div>
            <form onSubmit={submitTask}>
                <input type="text" onChange={handleChange} value={input} placeholder="Let's Get Productive!" />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )

}

    {/* <div>
            <input type="text" onChange={handleChange} value={input} placeholder="Let's Get Productive!" />
            <button onClick={submitTask}>Add Task</button>
        </div> */}

export default AddTodos
