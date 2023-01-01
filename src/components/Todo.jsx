import React from 'react'

function Todo({todo_key,todo_title, todo_is_done}) {

    console.log(todo_key,todo_title,todo_is_done)
    
  return ( 
    <li>
        <input type="checkbox" value={todo_is_done} />
        <h2>{todo_title}</h2>
    </li>
  )
}

export default Todo