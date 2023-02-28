import React from 'react'
import Header from '../Header'



function Layout({children}) {
  return (
    <main className='w-full sm:w-[35rem] mx-auto'>
        <Header />
          {children}
    </main>

  )
}

export default Layout