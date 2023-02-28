import React, { useEffect, useState } from 'react'
import Layout from './Components/Layout';
import * as Assets from './Assets'
import Fade from 'react-reveal/Fade'
import ThemeSwitcher from './Components/ThemeSwitcher';


export default function App() {

  const [TodoList,setTodoList] = useState([]);

  const [TodoTitle,setTodoTitle] = useState();


  useEffect(() => {
    console.log("Todolist -> ",TodoList);
    localStorage.setItem('TodoList',TodoList);
  },[TodoList])
  


  function handleEnter(e){
    if(e.key === "Enter"){
      addTodo(TodoTitle);
      //console.log(TodoTitle," is added!");
      e.target.value = "";
    }
  }

  function addTodo(title){
    const randNum = Math.floor(Math.random() * 1000)
    const inputTodo = {
        id:randNum,
        title,
        isComplete:false
    }
    setTodoList(todos => [...todos,inputTodo])
}

function HandleTodoChange(e,todo){
  let TargetCheck = e.target.checked;
  let parentEl = e.target.parentElement;

  if(TargetCheck){
    todo.isComplete = true;
    console.log(TodoList);
    parentEl.classList.add('line-through')
  }
  else if(!TargetCheck){
    todo.isComplete = false;
    console.log(TodoList);
    parentEl.classList.remove('line-through')
  }
}

function RemoveTodo(e,id){
  e.preventDefault();
  const filteredArr = TodoList.filter(todo => {return todo.id !== id});
  setTodoList(filteredArr);
}
function RemoveDoneTodos(e){
  e.preventDefault();
  const filteredArr = TodoList.filter(todo => {return todo.isComplete !== true});
  setTodoList(filteredArr);

}

  return (
	  <Layout>
      <Fade>
      <div className='p-4'>
        <div className='flex justify-between my-[2.88rem]'>
          <h1 className='text-3xl font-bold tracking-[.70rem] ml-8 text-light-gray'><a href="/">TODO</a></h1>
          
          <ThemeSwitcher />
        </div>

        <div>
        <div className='flex shadow-xl bg-light-gray dark:bg-darkest-blue-desaturated dark:text-light-gray-blue px-4 py-8 rounded-xl mb-8 '>
          <input className='mr-2' type="checkbox" />
          <input onKeyDown={handleEnter} onChange={e => {setTodoTitle(e.target.value)}} className='w-full text-xl p-2 bg-transparent placeholder:text-dark-gray-blue-darker focus:outline-none focus:ring-2 rounded-sm focus:ring-light-gray-blue  focus:border-dark-gray-blue' type="text" placeholder='Create a new todo..' />
        </div>

          <ul className='flex flex-col-reverse divide-y divide-y-reverse bg-white dark:bg-darkest-blue rounded-md  '>
            {
              TodoList.map(todo => {
                return (
                  <li key={todo.id} className='flex justify-between px-4 py-6 gap-2 dark:text-light-gray-blue'>
                  <div>
                    <input id={`check_${todo.id}`} onChange={e => {HandleTodoChange(e,todo)}} className='mr-2 ' type="checkbox"/>
                    <label htmlFor={`check_${todo.id}`}>{todo.title}</label>
                  </div>
                  <button className='dark:fill-light-gray' onClick={e => {RemoveTodo(e,todo.id)}}><img src={Assets.CrossIcon} alt="cross icon" /></button>
                </li>
                )
              })
            }

          </ul>
          <div className='text-darkest-blue dark:text-light-gray-blue flex justify-between px-4 py-6 '>
              <span className='ml-4'>{TodoList.length} items left</span>
              <button onClick={e => {RemoveDoneTodos(e)}} className='mr-4'>Clear Completed</button>
            </div>
        </div>
      </div>
      </Fade>
    </Layout>
  );
}

