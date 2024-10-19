import React from 'react'

function TaskNumList({data}) {
    // console.log(data)
  return (
    <>
    <div className='mt-5 flex justify-center gap-5 px-5 py-2'>
        <div className='w-[20%] bg-blue-600 rounded px-4 py-2'>
            <p className='text-4xl font-bold'>{data.taskNumbers.newTasks}</p>
            <p className='font-sm text-2xl'>New Task</p>
        </div>
        <div className='w-[20%] bg-red-600 rounded px-4 py-2'>
            <p className='text-4xl font-bold'>0</p>
            <p className='font-sm text-2xl'>Completed</p>
        </div>
        <div className='w-[20%] bg-yellow-600 rounded px-4 py-2'>
            <p className='text-4xl font-bold'>{data.taskNumbers.totalTasks}</p>
            <p className='font-sm text-2xl'>Accepted</p>
        </div>
        <div className='w-[20%] bg-green-600 rounded px-4 py-2'>
            <p className='text-4xl font-bold'>{data.taskNumbers.failedTasks}</p>
            <p className='font-sm text-2xl'>Failed</p>
        </div>
    </div>
    </>
  )
}

export default TaskNumList