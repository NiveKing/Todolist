import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import "./todos.css"

const Todos = (props) => {
    const deleteHandle = (index) => {
        const newList = props.taskList.slice(0,index).concat(props.taskList.slice(index + 1, props.taskList.length));
        props.setTaskList(newList)
    }

    const lists = props.taskList.map((item, index) => {
        return(
            <Stack direction='horizontal' className='list'>
                <li className='p-2' key={index}>{item}</li>
                <Button className='p-2 ms-auto' variant='secondary' onClick={()=> deleteHandle(index)}>Delete!</Button>
            </Stack>
        )
    })

    return (
            <ul id='todos'>
                    {lists}
            </ul>
    )
}
  
export default Todos