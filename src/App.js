import React from 'react';

import ToDoForm from './components/TodoForm'

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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
