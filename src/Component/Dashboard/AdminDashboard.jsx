import React from 'react'
import Header from '../OtherComponents/Header'
import AdminForm from '../OtherComponents/AdminForm'
import AdminTaskList from '../Tasklist/AdminTaskList'

function AdminDashboard({data}) {
  // console.log(data)
  return (
    <>
    <Header data={data}/>
    <AdminForm/>
    <AdminTaskList/>
    </>
  )
}

export default AdminDashboard