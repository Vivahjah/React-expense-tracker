import React, {useState, useEffect} from 'react';
import './App.css';
import Forms from './components/Forms';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
    
      default:
        setFilteredTodos(todos)
        break;
    }
  };
  
  //Saving to Local Storage
  const saveLocalTodos = () => localStorage.setItem('todos', JSON.stringify(todos));
  
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {

      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))

      setTodos(todoLocal)
    }
    //localStorage.getItem('todos') === null ? localStorage.setItem('todos', JSON.stringify([])) : localStorage.setItem('todos', JSON.stringify(todos));
  }

  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect runs ones(depending) a programme is launch
  useEffect(() => {
    filterHandler();
    saveLocalTodos();

   },[todos,status]) //runs anytime the todos or status changes
 
  return (
    <div className="App">
     <header>
       <h1>My Todo List</h1>
     </header>
     <Forms todos={todos}  setStatus={setStatus} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
     <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
