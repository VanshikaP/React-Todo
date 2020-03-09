import React from 'react';

import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'

import './components/Todo.css'

const tasks = [{
  item: 'MVP',
  id: 0,
  completed: false
},
{
  item: 'Styling',
  id: 1,
  completed: false
},
{
  item: 'Search',
  id: 2,
  completed: false
}];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      tasks: tasks,
      displayTasks: tasks,
      searchTerm: '',
      searched: false
    }
  }

  //BASIC FUNCTIONS

  addTask = task => {
    this.setState({
      tasks: [...this.state.tasks, task],
      displayTasks: [...this.state.displayTasks, task],
      searchTerm: this.state.searchTerm,
      searched: this.state.searched
    })
  }

  toggleCompleted = taskId => {
    console.log('marking complete')
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
      }),
      displayTasks: this.state.displayTasks.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      }),
      searchTerm: this.state.searchTerm,
      searched: this.state.searched
    })
  }

  // VIEW FUNCTIONS

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks,
      displayTasks: this.state.displayTasks.filter(task => task.completed === false),
      searchTerm: this.state.searchTerm,
      searched: this.state.searched
    })
  }

  showCompleted = () => {
    this.setState({
      tasks: this.state.tasks,
      displayTasks: this.state.tasks.filter(task => task.completed === true),
      searchTerm: this.state.searchTerm,
      searched: this.state.searched
    })
  }

  showAll = () => {
    this.setState({
      tasks: this.state.tasks,
      displayTasks: this.state.tasks,
      searchTerm: '',
      searched: false
    })
  }

  // SEARCH FUNCTIONS

  handleSearch = e => {
    this.setState({
      tasks: this.state.tasks,
      displayTasks: this.state.displayTasks,
      searchTerm: e.target.value,
      searched: this.state.searched
    })
  }

  searchTask = (e) => {
    e.preventDefault();
    console.log(this.state)
    if(this.state.searchTerm !== ''){
      console.log('filtering')
      this.setState({
        tasks: this.state.tasks,
        displayTasks: this.state.tasks.filter(task => task.item.toLowerCase().includes(this.state.searchTerm.toLowerCase())),
        searchTerm: this.state.searchTerm,
        searched: true
      })
    } 
  }

  handleBack = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks,
      displayTasks: this.state.tasks,
      searchTerm: '',
      searched: false
    })
    console.log('Search Cleared')
  }

  render() {
    return (
      <div className='container'>
        <h2 className='title'>Welcome to your Todo App!</h2>
        <div className='forms'>
          <div className='search-container'>
            <input className='search input' onChange={this.handleSearch} name='search' value={this.state.searchTerm} placeholder='Search Tasks Here'/>
            <button className='search btn' onClick={this.searchTask}>Search</button>
            <button className={`search btn${this.state.searched ? ' back' : 'back close'}`} onClick={this.handleBack}>Back</button>
          </div>
        </div>
        <ToDoList tasks={this.state.displayTasks} toggleCompleted={this.toggleCompleted} addTask={this.addTask} />
        <div className='view-btn-container'>
          <button className='view clear btn' onClick={this.clearCompleted}>Clear Completed</button>
          <button className='view completed-tasks btn' onClick={this.showCompleted}>Show Completed Tasks</button>
          <button className='view all btn' onClick={this.showAll}>Show All Tasks</button>
        </div>

      </div>
    );
  }
}

export default App;
