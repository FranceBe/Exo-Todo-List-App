import React, { Component } from 'react';
import List from './components/list.js';
import TodoForm from './components/TodoForm.jsx';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.stat={
            todos : []
        };
    }
    onNewTodo(todo){
        let newTodoList = this.stat.todos;
        newTodoList.push(todo);
        this.setState({ todos : newTodoList});
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do list </h1>
        </header>
        <p className="App-intro">
        <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
          <List todos={this.stat.todos}/>
        </p>
      </div>
    );
  }
}

export default App;
