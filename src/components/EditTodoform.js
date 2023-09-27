import React, {useState} from 'react'

function EditTodoform({editTodo, task}) {
  const [value, setValue] = useState(task.task)

  const handleSubmit = (e) =>{
    e.preventDefault()
    editTodo(value, task.id)

    setValue("")
  }

  return(
   <form className='Todoform' onSubmit={handleSubmit}>
    <input type='text' className='todo-input' value={value} placeholder='Update Task?' onChange={(e) => setValue(e.target.value)}></input>
    <button type='submit' className='todo-btn'>Update</button>
   </form>
  )
}
export default EditTodoform