import React from 'react'

import './App.css';

const TodoList = ({todolist,deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <div className="todo-container-list">
                    <input type="checkbox"  />
                     <h5>{todo}</h5>
                     <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
            </div>)}
        </div>
    )
}

export default TodoList