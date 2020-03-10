import React, {useState} from 'react'

const ToDoForm = (props) => {

    const [toDo, setToDo] = useState('')

    const handleChange = e => {
        setToDo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(toDo === ''){
            alert('Please enter task name to add it to list');
        } else {
            props.addTask({
                item: toDo,
                id: Date.now(),
                completed: false
            })
            setToDo('')
        }
        
    }
    return (
        <form className='add-todo-container'>
            <input required type='text' className='add-todo input' name='todo' value={toDo} placeholder='Add ToDo' onChange={handleChange} />
            <button type='submit' className='add-todo btn' onClick={handleSubmit}>Add ToDo</button>
        </form>
    )
}

export default ToDoForm