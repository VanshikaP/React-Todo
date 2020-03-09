// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

const TodoList = (props) => {
    return (
        <div className='todo-container'>
            {props.tasks.map(task => {
                return <p className='todo' onClick={() => props.markCompleted(task.id)}>{task.item}</p>
            })}
        </div>
    )
}