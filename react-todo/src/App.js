import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className='todo-app'>
        <TodoForm></TodoForm>
      </div>
    );
  }
}

export default App;
