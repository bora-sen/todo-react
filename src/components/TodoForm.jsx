import React, { useState } from 'react'

function TodoForm({todos,setTodos}) {

    const [localID,setLocalID] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        setTodos(todo => [...todo,{
            id : localID,
            title : document.getElementById('input_text').value,
            isDone: false
        }]);
        let inc = localID + 1;
        setLocalID(inc);
        console.table(todos);
    }

  return (
		<div className='flex items-center bg-indigo-100 dark:bg-gray-800 h-16'>
            <label className="dark:text-gray-200 mx-4" htmlFor="input_text">Todo : </label>
            <input className="w-auto rounded bg-indigo-50 placeholder-gray-900 dark:placeholder-gray-700 h-8 w-auto dark:text-gray-700" id="input_text" type="text" placeholder='Enter A Todo..'/>
            <button className="sm:text ml-auto mr-2 h-8 rounded px-4 bg-indigo-500 text-white font-bold" onClick={handleSubmit}>Add Todo</button>
        </div>
  )
}

export default TodoForm