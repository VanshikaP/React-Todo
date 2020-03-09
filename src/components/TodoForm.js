import React, {useState} from 'react'

const ToDoForm = (props) => {

    const [toDo, setToDo] = useState('')

    const handleChange = e => {
        setToDo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTask({
            item: toDo,
            id: Date.now(),
            completed: false
        })
    }
    return (
        <form>
            <input type='text' name='todo' placeholder='Add ToDo' onChange={handleChange} />
            <button onClick={handleSubmit}>Add ToDo</button>
        </form>
    )
}

export default ToDoForm