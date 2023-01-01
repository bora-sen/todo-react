import React from 'react'

function TodoList({todos}) {


    function handleChange(e){
        e.preventDefault();
        console.log("clicked");
        console.log(e.target.checked);
        document.getElementById("todo_title").classList.toggle('todo_done');
    }

  return (
    <ul className='flex flex-col flex-end p-4 h-full my-4 overflow-auto'>
    {
    todos.map(todo => {
        return (
            <li key={todo.id} className="h-12 mb-4 container flex w-full bg-indigo-100 items-center dark:bg-gray-500 dark:hover:bg-gray-600">
                <input onChange={handleChange} type="checkbox" className='mx-4 w-8 h-8'/>
                <h3 id="todo_title" className='dark:text-gray-200 text-xl'>{todo.title}</h3>
                <button onClick={console.log("DELETE Clicked!!")} className="bg-indigo-600 text-white rounded px-4 hover:bg-indigo-700 transition-colors ml-auto mr-4">DELETE</button>
            </li>
        )
    })}
    </ul>
  )
}

export default TodoList