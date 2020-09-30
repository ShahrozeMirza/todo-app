import React from 'react';
import Todo from './Todo';

function TodoList({todos, setTodos,filteredTodos}) {

    

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        filteredTodos.map(todo => (
                            <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} text={todo.text}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList;
