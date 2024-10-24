import React from 'react'

function CompletedTask({data}) {
  return (
    <div className=' flex-shrink-0 text-black rounded-lg w-[30%] min-h-[30vh] px-4 py-2 bg-yellow-400'>
            <div className='flex justify-between'>
                <button className='bg-red-600 px-2 py-1 rounded text-white'>High</button>
                <p>{data.date}</p>
            </div>
            <div className='mt-5'>
                <h1 className='font-bold mb-2 underline'>{data.tasktitle}</h1>
                <p className=' tracking-tighter'>{data.taskdescription}</p>
            </div>
            <div className='mt-4'>
                <button className='bg-green-400 rounded px-2 py-1 font-semibold w-full'>Completed</button>
            </div>
        </div>
  )
}

export default CompletedTask