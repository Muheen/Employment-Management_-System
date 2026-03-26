import React, { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()
export const activeEmpContext = createContext()

const AuthProvider = (props) => {



  const [employeeData, setEmployeeData] = useState([])
  const [adminData, setAdminData] = useState([])
  const [activeEmp, setActiveEmp] = useState([])

  useEffect(() => {
    // console.log('useEffect called')

    const data = JSON.parse(localStorage.getItem('employee'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    setEmployeeData(data)
    setAdminData(admin)

  }, [])

  return (
    <div>
      <AuthContext.Provider value={{ employeeData, adminData }}>
        <activeEmpContext.Provider value={{ activeEmp, setActiveEmp }}>
          {props.children}
        </activeEmpContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
