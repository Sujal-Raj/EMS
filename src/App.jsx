import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Auth/Login'
import EmployeeDashboard from './Component/Dashboard/EmployeeDashboard'
import AdminDashboard from './Component/Dashboard/AdminDashboard'
import {getLocalStogare,setLocalStogare } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const AuthData = useContext(AuthContext)
  // console.log(AuthData)

  useEffect(() => {
    // setLocalStogare();
    // getLocalStogare();
  },)

  useEffect(() => {
    // localStorage.clear()
    if (AuthData){
       const loggedInUser = localStorage.getItem("loggedInUser");
       if(loggedInUser){
         setUser(JSON.parse(loggedInUser).role);
         setLoggedInUserData(JSON.parse(loggedInUser).data)
       }
    }
  }, [AuthData])
  


  const handleLogin = (email,password)=>{
    if(AuthData && AuthData.admin.find((e)=> email == e.email && password == e.password)){
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}));
    }
    else if(AuthData && AuthData.employees.find((e)=>email == e.email && password == e.password)){
      setUser("employee");
      localStorage.setItem("loggedInUser", JSON.stringify({role:"employee"}));
      const employeeData = AuthData.employees.find((e)=>email == e.email && password == e.password);
      setLoggedInUserData(employeeData);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employeeData }));

    }
    else{
      alert("Invalid Credentials");
    }
  }
  

  return (
    <>
    {!user ? <Login HandleLogin = {handleLogin} /> : " "}
    {/* {user == "admin" ? <AdminDashboard/> : <EmployeeDashboard/>} */}
    {user == "admin" && <AdminDashboard data={loggedInUserData} changeUser={setUser} />}
    {user == "employee" && <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>} 
      {/* <Login/>  */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
