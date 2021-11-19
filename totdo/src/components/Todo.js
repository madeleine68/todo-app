
const Todo = function ({ text, todo, todos, setTodos }) {
    const deleteHandler = function() {
        setTodos(todos.filter((element) => element.id !== todo.id))
    }
    const completehandler = function () {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed 
                }    
            }
            return item
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completehandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;