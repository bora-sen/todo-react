import {React, useState} from 'react'



function TodoForm({setTodos}) {
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
        console.log("New Todo Added: ");
    }


  return (
    <div className='flex items-center bg-indigo-100 dark:bg-gray-800 h-auto'>
    <input className="w-2/3 rounded bg-indigo-50 placeholder-gray-900 dark:placeholder-gray-700 h-8 dark:text-gray-700" id="input_text" type="text" placeholder='Enter A Todo..'/>
    <button className="w-1/3 text-sm ml-auto mr-2 h-8 rounded px-4 bg-indigo-500 text-white font-bold" onClick={handleSubmit}>Add Todo</button>
</div>
  )
}

export default TodoForm