import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, filteredTodos, setTodos }) => {
  return (
      //will be filtering based on the content of our filteredTodos
    <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (<Todo key={todo.id}  todo={todo} todos={todos} setTodos={setTodos} text={todo.text}/>))}
        </ul>
    </div>
  )
}

export default TodoList