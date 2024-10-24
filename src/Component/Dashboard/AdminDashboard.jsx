import React from 'react'
import Header from '../OtherComponents/Header'
import AdminForm from '../OtherComponents/AdminForm'
import AdminTaskList from '../Tasklist/AdminTaskList'

function AdminDashboard({data ,changeUser}) {
  // console.log(data)
  return (
    <>
    <Header changeUser = {changeUser} data={data}/>
    <AdminForm/>
    <AdminTaskList/>
    </>
  )
}

export default AdminDashboard