import {React, useEffect, useState} from 'react'

function ThemeToggleButton() {
  const document_classList = document.documentElement.classList;

  const [theme,setTheme] = useState('light');

  function switchToDark() {
    setTheme('dark');
    document_classList.add('dark');
    console.log("Switched to Dark Theme");
    localStorage.setItem('theme','dark');
  }
  function switchToLigt() {
    setTheme('light')
    document_classList.remove('dark');
    console.log("Switched to Light Theme");
    localStorage.setItem('theme','light');
  }


  useEffect(() => {
    if(localStorage.getItem('theme') === 'dark'){
      setTheme('dark')
      switchToDark()
    }
  },[])


  function toggleTheme(e) {
    e.preventDefault();
    if(theme === 'light') {
      switchToDark()
    }
    else if(theme === 'dark') {
      switchToLigt()
    }
  }

  return (
    <button className="flex align-center bg-indigo-600 p-4 rounded dark:bg-gray-600" onClick={toggleTheme}>
        <svg className='w-8 h-8 mr-2 dark:hidden stroke-white' width="46" height="46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
</svg>

    <svg className='w-8 h-8 mr-2 stroke-white hidden dark:inline' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z"></path>
    <path d="M12 1v2"></path>
    <path d="M12 21v2"></path>
    <path d="m4.22 4.22 1.42 1.42"></path>
    <path d="m18.36 18.36 1.42 1.42"></path>
    <path d="M1 12h2"></path>
    <path d="M21 12h2"></path>
    <path d="m4.22 19.78 1.42-1.42"></path>
    <path d="m18.36 5.64 1.42-1.42"></path>
    </svg>

    <span className='font-bold text-2xl mr-4 text-white'>
        {theme === 'light' ? "Light Mode" : "Dark Mode"}
    </span>
    </button>
  )
}

export default ThemeToggleButton