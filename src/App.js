import React, {useState} from 'react'
import './App.css';
import ThemeToggleButton from './components/ThemeToggleButton';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


export default function App() {

	const [todos,setTodos] = useState([]);




  return (
		<>
			<main className='flex flex-col justify-between lg:container lg:mx-auto p-4 h-screen bg-neutral-50 dark:bg-gray-900 text-gray-200 mx-auto text-gray-900'>
			<div className='flex items-center justify-between'>
				<h1 className='dark:text-gray-200 text-2xl text-gray-900 text-center font-bold mb-4 mr-4'>Welcome to my Todo App (Made with React.js)</h1>
				<ThemeToggleButton />
			</div>


			<TodoList todos={todos}/>
			<TodoForm todos={todos} setTodos={setTodos}/>
			</main>

		</>
  );
}

