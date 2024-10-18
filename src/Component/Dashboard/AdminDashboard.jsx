import React from 'react'
import Header from '../OtherComponents/Header'
import AdminForm from '../OtherComponents/AdminForm'
import AdminTaskList from '../Tasklist/AdminTaskList'

function AdminDashboard() {
  return (
    <>
    <Header/>
    <AdminForm/>
    <AdminTaskList/>
    </>
  )
}

export default AdminDashboard