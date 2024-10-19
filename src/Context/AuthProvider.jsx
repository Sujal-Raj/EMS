import React, { createContext, useEffect, useState } from 'react'
import { getLocalStogare } from '../Utils/LocalStorage';

export const AuthContext = createContext();

function AuthProvider({children}) {

    // const [employeeData, setEmployeeData] = useState(null)
    // const [adminData, setAdminData] = useState(null)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
       const {employees,admin} = getLocalStogare();
       setUserData({employees,admin});
       
    }, [])
        // setAdminData(data[admin]);
        // setEmployeeData(data.employees);
    


  return (
    <>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider