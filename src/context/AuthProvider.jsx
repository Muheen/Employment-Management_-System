import React, { act, createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()
export const activeUserContext = createContext()
import { getData } from '../utils/LocalStorage'

const AuthProvider = (props) => {

  const [employeeData, setEmployeeData] = useState([])
  const [adminData, setAdminData] = useState([])
  const [activeUser, setActiveUser] = useState(null)

  useEffect(() => {
    // console.log('useEffect called')
    const { employee, admin } = getData()
    setEmployeeData(employee)
    setAdminData(admin)

  }, [setEmployeeData])

  const updateTaskStatus = (index, updates) => {

    // Step-1: Update tasks
    const updatedTasks = activeUser?.employee.tasks.map((task, i) => {
      if (i === index) {
        return { ...task, ...updates }
      }
      return task
    })
    // Step-2: Updated employee object
    const updatedEmployee = { ...activeUser.employee, tasks: updatedTasks }

    // Step-3: Update employee list
    const updatedEmployees =
      employeeData.map(emp => {

        if (emp.id === updatedEmployee.id) {
          return updatedEmployee
        }
        return emp
      })
    // Step-4: Update states
    setActiveUser({ ...activeUser, employee: updatedEmployee })
    setEmployeeData(updatedEmployees)

    // Step-5: Update localStorage
    localStorage.setItem("employee", JSON.stringify(updatedEmployees))

  }

  return (
    <div>
      <AuthContext.Provider value={{ employeeData, adminData, setEmployeeData, setAdminData }}>
        <activeUserContext.Provider value={{ activeUser, setActiveUser, updateTaskStatus }}>
          {props.children}
        </activeUserContext.Provider>
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
