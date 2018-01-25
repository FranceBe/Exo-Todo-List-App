import React, {Component} from 'react';

class List extends Component {
    render() {
        return(
            <div className="liste">
                <div className="NbrTodo">To-do : [ <span className="TodoLength">{this.props.todos.length} </span> ] </div>
                <div className="Explication">Une fois ajouté, cliquez sur l'élément de la liste afin de changer son Statut de "A faire" à "Fait" </div>
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
                    <div className="todo" key="todo-{todo.title}"
                         onClick={() => this.toggleTodo(todo, idx)}>
                        {todo.title} {todo.done ? ': Fait' : ': A faire'}
                    </div>
                )
            })
        );
    }
}
export default List;
