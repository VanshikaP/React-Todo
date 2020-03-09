import React from 'react';

import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'

const tasks = [{
  item: '',
  id: 0,
  completed: false
}];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      tasks: tasks
    }
  }

  addTask = task => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  markCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask} />
        <button className='btn' onClick={this.clearCompleted}>Clear Completed</button>
        <ToDoList tasks={this.state.tasks} markCompleted={this.markCompleted} />
      </div>
    );
  }
}

export default App;
