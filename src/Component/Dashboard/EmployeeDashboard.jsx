import React from 'react'
import Header from '../OtherComponents/Header'
import TaskNumList from '../OtherComponents/TaskNumList'
import AllTaskList from '../Tasklist/AllTaskList'

function EmployeeDashboard() {
  return (
    <>
    <Header />
    <TaskNumList/>
    <AllTaskList/>
    </>
  )
}

export default EmployeeDashboard