import React, {Component} from 'react';
import TodoItem from './todoItem.jsx';

class List extends Component {
    render() {
        return(
            <div className="liste">
                <div className="NbrTodo">To-do : [ <span className="TodoLength">{this.props.todos.length} </span> ] </div>
                <div className="Explication"> Changez le statut de l'élément en cliquant sur le bouton associé. </div>
                <div className="EltAdded">{this.showTodos(this.props.todos)}</div>
        </div>
        );
    }
    toggleTodo(todo, index){
        this.props.onTodoToggle(todo, index);
    }
    showTodos(todos){
        return(
            todos.map((todo, idx) => {
                return(
                <TodoItem item={todo}
                          key={todo.title+''+idx}
                          idx={idx}
                          toggleTodo={this.toggleTodo.bind(this)}/>
                )
            })
        );
    }
}
export default List;
