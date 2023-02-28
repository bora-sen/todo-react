import React from 'react'
import * as Assets from '../Layout/Assets'
import Fade from 'react-reveal/Fade'

function Header() {
  return (
    <section>
      <Fade>
      <div className='absolute -z-50 w-full h-[11rem] top-0 left-0 overflow-hidden transition-all'>
        <img className='w-full object-cover block dark:hidden' src={Assets.MobileLightBG} alt="decorative" />
        <img className='w-full object-cover hidden dark:block' src={Assets.MobileDarkBG} alt="decorative" />
      </div>
      </Fade>
          
    </section>
  )
}

export default Header