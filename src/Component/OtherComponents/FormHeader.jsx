import React from 'react'

function FormHeader({text}) {
  return (
    <>
        <div className='heading m-4 rounded-full font-bold text-4xl h-[10vh] bg-emerald-500 flex items-center justify-center'>
        <h1>{text}</h1>
    </div>
    </>
  )
}

export default FormHeader