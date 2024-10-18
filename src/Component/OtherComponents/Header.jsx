import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between px-20 py-2  h-[15vh] '>
      <div>
        <h2>Hiii, <br /> <span className='text-2xl font-semibold'>Sujal👋🏻</span></h2>
      </div>
      <button className='bg-red-600 px-2 py-1 rounded text-xl'>Log Out</button>
    </header>
  )
}

export default Header