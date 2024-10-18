import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Auth/Login'
import EmployeeDashboard from './Component/Dashboard/EmployeeDashboard'
import AdminDashboard from './Component/Dashboard/AdminDashboard'
import {getLocalStogare,setLocalStogare } from './Utils/LocalStorage'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setLocalStogare();
    getLocalStogare();
  },)
  

  return (
    <>
      <Login/> 
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
