const TodoContainer = () =>{
    return (
        <>
        <div className="todo-container-block">
            <div className="todo-container">
                <input type="radio" name="todo-radio" id="todolist-check" />
                <span className="todo-input-span">Complete Online Javascript Course</span>
                <button className="button-text">Delete</button>
            </div>
        </div>
        </>
    )
}

export default TodoContainer