import React from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
const App = () => {
  return (
    <div className='h-screen bg-black'>
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard/>
    </div>
  )
}

export default App
