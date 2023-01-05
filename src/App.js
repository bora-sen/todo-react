import React, {useState} from 'react'
import './App.css';
import { ThemeToggleButton, TodoForm } from './components';


export default function App() {

	const [todos,setTodos] = useState([]);



	function handleDone(event) {
		let isDone = event.target.checked;
		if(isDone) {
			event.target.parentElement.classList.add('line-through');
		}
		else if(!isDone) {
			event.target.parentElement.classList.remove('line-through');
		}
	}
	function handleRemove(e,id_val) {
		e.preventDefault();
		let new_todos = todos.filter(todo => {return todo.id !== id_val})
		setTodos(new_todos);
	}



  return (
		<>
			<main className='flex flex-col justify-between lg:container lg:mx-auto p-4 h-screen bg-neutral-50 dark:bg-gray-900 dark:text-gray-200 mx-auto text-gray-900'>
			<div className='flex items-center justify-between'>
				<h1 className='dark:text-gray-200 text-2xl text-gray-900 text-center font-bold mb-4 mr-4'>Welcome to my Todo App (Made with React.js)</h1>
				<ThemeToggleButton />
			</div>

			<ul className='flex flex-col flex-end p-4 h-full my-4 overflow-auto'>
				{
				todos.map(todo => {
					return (
						<li key={todo.id} className="h-12 mb-4 container flex w-full bg-indigo-100 items-center dark:bg-gray-500 dark:hover:bg-gray-600">
							<input onChange={e => {handleDone(e)}} type="checkbox" className='mx-4 w-8 h-8'/>
							<h3 id="todo_title" className='dark:text-gray-200 text-xl'>{todo.title}</h3>
							<button onClick={e => {handleRemove(e,todo.id)}} className="bg-indigo-600 text-white rounded px-4 hover:bg-indigo-700 transition-colors ml-auto mr-4">DELETE</button>
						</li>
					)
				})}
			</ul>


				<TodoForm setTodos={setTodos}/>
			</main>

		</>
  );
}

