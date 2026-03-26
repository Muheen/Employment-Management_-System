import React, { use, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setData } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { activeEmpContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  const { activeEmp, setActiveEmp } = useContext(activeEmpContext)
  const { employeeData, adminData } = useContext(AuthContext)
  // console.log(employeeData)

  const loginHandler = (email, password) => {
    const employee = employeeData.find(emp => emp.email === email && emp.password === password)
    const admin = adminData.find(adm => adm.email === email && adm.password === password)
    if (admin) {
      setUser({ role: 'admin', email: admin.email, password: admin.password })
      setActiveEmp(admin)
      // console.log('Admin logged in', admin)
    } else if (employee) {
      setUser({ role: 'employee', email: employee.email, password: employee.password })
      setActiveEmp(employee)
      // console.log('Employee logged in', employee)
    } else {
      alert('Invalid credentials')
    }

    // if (email === 'admin@example.com' && password === '123') {
    //   setUser({ role: 'admin' , email : email, password : password })
    // }
    // else if (email === 'employee@example.com' && password === '123') {
    //   setUser({ role: 'employee' , email : email, password : password })
    // }
    // else {
    //   alert('Invalid credentials')
    // }
  }

  // istrha bhi useEffect laga k loginHandler ko call krna tha but isse
  //const [userData, setUserData] = useState([])
  // infinite loop me chala jata tha isliye useEffect hata diya hai

  // const loginHandler = () => {
  //   console.log(userData)
  //   if (userData.email === 'admin@example.com' && userData.password === '123') {
  //     setUser('admin')
  //   } else if (userData.email === 'employee@example.com' && userData.password === '123') {
  //     setUser('employee')
  //   }else{
  //     alert('Invalid Credentials')
  //   }
  // }
  // useEffect(()=>{
  //   loginHandler()
  // },[])
  //{!user ? <Login userData={setUserData} /> : user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard /> : null}


  return (
    <div className='h-screen bg-black'>
      {!user ? <Login user={loginHandler} /> : user.role === 'employee' ? <EmployeeDashboard /> : user.role === 'admin' ? <AdminDashboard /> : null}
    </div>
  )
}

export default App
