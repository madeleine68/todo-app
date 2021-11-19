import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';
import { useState, useEffect } from "react";
import Todo from './components/Todo'

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    

    //RUN ONCE WHEN THE APP START
    useEffect(() => {
        getLocalTodos();
    },[])

    useEffect(()=> {
        saveLocalTodos();
        filterHandler();
    }, [todos, status]);
   

   const filterHandler = function (){
       switch (status) {
            case  'completed':
                 setFilteredTodos(todos.filter((todo) => todo.completed === true))
            break;
           case  'uncompleted':
                setFilteredTodos(todos.filter((todo) => todo.completed === false))
                break;
           default:   
                setFilteredTodos(todos);
                break;
       }
   };
   // save to local
   const saveLocalTodos = function () {
       localStorage.setItem("todos", JSON.stringify(todos));
   };
   const getLocalTodos = function() {
       if (localStorage.getItem("todos") === null) {
           localStorage.setItem("todos", JSON.stringify([]));
       } else {
           let todoLocal = JSON.parse(localStorage.getItem("todos"))
           setTodos(todoLocal);
       }
   }
    return (
        <div className="App">
            <header>
                <h1>Madeleine's Todo List</h1>
            </header>
            <Form
              todos={todos}
              setTodos={setTodos}
              setInputText={setInputText}
              inputText={inputText}
              setStatus={setStatus}
              />
            <TodoList 
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}/>
        </div>
    )
}

export default App;