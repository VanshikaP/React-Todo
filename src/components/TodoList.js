// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDoForm from './TodoForm'

const TodoList = (props) => {
    return (
        <div className='todo-container'>
            {props.tasks.length < 1
            ? <div className='todo'>No Completed Tasks Yet</div>
            : props.tasks.map(task => {
                    return (
                        <div key={task.id} className={`todo${task.completed ? ' completed' : ''}`} onClick={() => props.toggleCompleted(task.id)}>{task.item}</div>
                    )
                })}
            <ToDoForm addTask={props.addTask} />
        </div>
    )
}

export default TodoList