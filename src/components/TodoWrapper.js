import React, { useState} from 'react'
import Todoform      from './Todoform';
import Todo  from './Todo';
import { v4 as uuidv4} from 'uuid';
import EditTodoform from './EditTodoform';
uuidv4();


function TodoWrapper() {
    const [todos, setTodos] = useState([ ])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id ? {
        ...todo , completed: !todo.completed} : todo))
    }

    const deleteTodo = id =>{
      setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id =>{
      setTodos(todos.map(todo => todo.id === id ? {
        ...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) =>{
      setTodos(todos.map(todo => todo.id === id ? {
        ...todo, task, isEditing: !todo.isEditing} : todo
      ))
    }

  return (
    <div className='Todowrapper'>
        <h1>Get things Done!</h1>
        <Todoform addTodo = {addTodo}></Todoform>
        {todos.map((todo) => (
          todo.isEditing ? (
            <EditTodoform editTodo={editTask} task={todo}></EditTodoform>
          ) : (
            <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}></Todo>
            )
            ))}
          
         
     
    </div>
  )
}

export default TodoWrapper