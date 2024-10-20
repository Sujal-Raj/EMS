import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

function AllTaskList({data}) {
    // console.log(data.task)
  return (
    <>
            
        {/* <AcceptTask/> */}
        {/* <NewTask/> */}
        {/* <CompletedTask/> */}
        {/* <FailedTask/>  */}
        {/* {data.task.map((elem)=>{
            console.log(elem)
            if(elem.accepted){
                return <div><AcceptTask/></div>
            }
            if(elem.newtask){
                return <NewTask/>
            }
            if(elem.completed){
                return <CompletedTask/>
            }
            if(elem.failed){
                return <FailedTask/>
            }

        })} */}

{data.task.map((elem, index) => {
    return (
        
        <div key={`task-${index}`} id='alltask' className='mt-20 w-full flex flex-nowrap overflow-x-auto gap-5 py-5 px-4'>
            {elem.accepted && <AcceptTask/>}
            {elem.newtask && <NewTask/>}
            {elem.completed && <CompletedTask/>}
            {elem.failed && <FailedTask/>}
        </div>
    )
})}

       
        
    </>
  )
}

export default AllTaskList