const Todos = (props) => {
    const deleteHandle = (index) => {
        const newList = props.taskList.slice(0,index).concat(props.taskList.slice(index + 1, props.taskList.length));
        props.setTaskList(newList)
    }

    const lists = props.taskList.map((item, index) => <li key={index}>
        {item}
        <button onClick={()=> deleteHandle(index)}>Delete!</button>
        </li>)

    return (
        <>
        <ul>{lists}</ul>
        </>
 
    )
}
  
export default Todos