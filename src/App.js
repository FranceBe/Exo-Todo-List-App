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
    toggleTodoState(todo, index){
        let _todo = todo;
        _todo.done = !todo.done;
        let newTodos = this.state.todos;
        newTodos[index] = _todo;
        this.setState({ todos : newTodos})
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do list </h1>
        </header>
        <div className="App-intro">
        <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
          <List todos={this.stat.todos} onTodoToggle={this.toggleTodoState.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
