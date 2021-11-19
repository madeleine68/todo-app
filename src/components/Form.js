
const Form = function ({inputText,setInputText, todos, setTodos, setStatus}) {
    const inputTextHandler = function(e) {
        setInputText(e.target.value)
    };
    const submitHandler = function (e) {
        e.preventDefault();
        setTodos([
            ...todos, {text:inputText, completed:false, id:Math.random()*1000}
        ])
        setInputText("")
    };
    const statusHandler = function(e) {
      setStatus(e.target.value)
    }
    return(
    <form>
      <input 
        value={inputText}
        type="text"
        className="todo-input"
        placeholder="type here"
        onChange={inputTextHandler}/>
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;