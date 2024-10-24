import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

function AdminTaskList() {

   const authData = useContext(AuthContext)
//    console.log(authData.employees)
  return (
    <>
    <div id='admin-task-list' className='bg-zinc-900 mx-8 rounded-lg py-2 px-4'>
    <div className='flex items-center justify-between mb-2  rounded-lg px-9 h-[5vh]'>
            <p className='w-1/5'>Name</p>
            <p className='w-1/5 text-orange-200'>New Task</p>
            <p className='w-1/5 text-yellow-400'>Total Tasks</p>
            <p className='w-1/5 text-red-600'>Failed Tasks</p>
            <p className='w-1/5 text-blue-600'>Active Tasks</p>
        </div>
        <div className='list '>
        {authData.employees.map((item,index)=>{
            return (<div key={index} className='flex items-center justify-between mb-2 bg-zinc-800 rounded-lg px-9 h-[5vh]'>
            <p className='w-1/5'>{item.name}</p>
            <p className='w-1/5 text-orange-200'>{item.taskNumbers.newTasks}</p>
            <p className='w-1/5 text-yellow-400'>{item.taskNumbers.totalTasks}</p>
            <p className='w-1/5 text-red-600'>{item.taskNumbers.failedTasks}</p>
            <p className='w-1/5 text-blue-600'>{item.taskNumbers.activeTasks}</p>
        </div>)
        })}
        </div>
    </div>
    </>
  )
}

export default AdminTaskList