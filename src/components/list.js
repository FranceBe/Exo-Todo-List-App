import React, {Component} from 'react';
import TodoItem from './todoItem.jsx';

class List extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedTodos: []
        };
        this.processTodos = this.processTodos.bind(this);
        this.addToList = this.addToList.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
}
    render() {
        const afficher = this.state.selectedTodos.length > 0;
        return(
            <div className="liste">
                <div className="NbrTodo">To-do : [ <span className="TodoLength">{this.props.todos.length} </span> ]</div>
                <div className="boutonTraiter"> { afficher ? <button onClick={this.processTodos}>Traiter</button> : null } </div>
                <div className="Explication"> Changez le statut de l'élément en cliquant sur le bouton </div>
                <div className="EltAdded">{this.showTodos(this.props.todos)}</div>
            </div>
        );
    }

processTodos(){
    let list = this.state.selectedTodos;
    list.forEach( item => item.done = !item.done);
    this.setState({ selectedTodos: list})
}

    toggleTodo(todo, index){
        this.props.onTodoToggle(todo, index);
    }

addToList(index, doAdd){
    let _todo = this.props.todos[index];
    if(doAdd){
        if(this.state.selectedTodos.indexOf(_todo) === -1){
            this.setState({
                selectedTodos : this.state.selectedTodos.concat(_todo)
            });
        }
    }
    else {
        let _list = this.state.selectedTodos;
        _list.splice(index, 1);
        this.setState({
            selectedTodos: _list
        })
    }
}


    showTodos(todos){
        return(
            todos.map((todo, idx) => {
                return(
                <TodoItem item={todo}
                          key={todo.title+''+idx}
                          idx={idx}
                          addToList={this.addToList}
                          toggleTodo={this.toggleTodo}/>
                )
            })
        );
    }
}
export default List;
