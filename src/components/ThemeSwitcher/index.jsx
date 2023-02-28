import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import * as Assets from '../../Assets'

function ThemeSwitcher() {
    const {ToggleTheme} = useContext(ThemeContext);
  return (
    <button onClick={e => {ToggleTheme(e)}}>
      <img className='w-10 h-10 mr-6 dark:opacity-0 dark:hidden transition-all' src={Assets.MoonIcon} alt="moon" />
      <img className='w-10 h-10 mr-6 opacity-0 hidden dark:opacity-100 dark:block transition-all' src={Assets.SunIcon} alt="moon" />
    </button>
  )
}

export default ThemeSwitcher