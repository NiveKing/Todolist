import { useState } from "react";

const AddTodos = (props) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const submitTask = (e) => {
        if (input !== '') {
        e.preventDefault();
        setInput('');
        props.setTaskList([...props.taskList, input])
        }
    }

    return (
        <>
        {/* <div>
            <input type="text" onChange={handleChange} value={input} placeholder="Let's Get Productive!" />
            <button onClick={submitTask}>Add Task</button>
        </div> */}
        <form onSubmit={submitTask}>
            <input type="text" onChange={handleChange} value={input} placeholder="Let's Get Productive!" />
            <button type="submit">Add Task</button>
        </form>
        </>
    )

}

export default AddTodos