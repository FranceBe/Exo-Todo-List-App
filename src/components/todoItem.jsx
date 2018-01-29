import React, {Component} from 'react';

class TodoItem extends Component {

    render(){
        const todo = this.props.item;
        const idx = this.props.idx;
        let str = todo.done ? 'Fait ' : 'A faire '
        return(
            <div className="todo" key="todo-{todo.title}">
                <input type="checkbox"
                    value={idx}
                    onClick={(e) => this.props.addToList(idx, e.target.checked)}/>
                {todo.title}
                <button onClick={() => this.props.toggleTodo(todo, idx)}>
                    {str}
                </button>
            </div>
        );
    }
}

export default TodoItem
