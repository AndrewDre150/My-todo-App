import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({task, toggleComplete, deleteTodo, editTodo}) {
  return (
    <div className='todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : " "}`}>{task.task}</p>
      <div className='icons'>
        <FontAwesomeIcon icon={faPenSquare} onClick={() => editTodo(task.id)}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Todo