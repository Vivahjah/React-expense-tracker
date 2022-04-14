import React from 'react'

const Todo = ({ text, setTodos , todos, todo}) => {

    const deleteHandler = () => setTodos(todos.filter((el) => el.id !== todo.id ));

    const completeHandler = () => {
        //change the completed value to it's opposite
        setTodos(todos.map(item => item.id === todo.id ? {...item, completed:!item.completed} : {...item}))
    } 








  return (
    <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
        <button onClick={completeHandler} className='complete-btn'>
            <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
            <i className='fas fa-trash'></i>
        </button>
    
    </div>       
  )
}

export default Todo