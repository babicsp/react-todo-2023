import React, { Component } from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className='todo-app'>
        <TodoList />
      </div>
    );
  }
}

export default App;
