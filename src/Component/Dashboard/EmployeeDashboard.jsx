import React from 'react'
import Header from '../OtherComponents/Header'
import TaskNumList from '../OtherComponents/TaskNumList'
import AllTaskList from '../Tasklist/AllTaskList'

function EmployeeDashboard({data}) {
   //console.log(data) // Print data from parent component
  return (
    <>
    <Header data = {data}/>
    <TaskNumList data = {data} />
    <AllTaskList data = {data}/>
    </>
  )
}

export default EmployeeDashboard