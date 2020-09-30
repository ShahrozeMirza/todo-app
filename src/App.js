import React,{useState,useEffect} from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    setLocalTodos();
  },[status,todos]);
  
  const filterHandler = () => {
    switch(status){
      case "completed":
      setFilteredTodos(todos.filter((todo) => (todo.completed)));
      break;

      case "uncompleted":
      setFilteredTodos(todos.filter((todo) => (!todo.completed)));
      break;

      default:
      setFilteredTodos(todos);
    }
  }

  const setLocalTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
  <h1>Shahroze's ToDo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
