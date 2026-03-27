import React, { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()
export const activeUserContext = createContext()

const AuthProvider = (props) => {



  const [employeeData, setEmployeeData] = useState([])
  const [adminData, setAdminData] = useState([])
  const [activeUser, setActiveUser] = useState(null)

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
        <activeUserContext.Provider value={{ activeUser, setActiveUser }}>
          {props.children}
        </activeUserContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
