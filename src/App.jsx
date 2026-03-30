import { useContext, useEffect } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { activeUserContext } from './context/AuthProvider'
import { setData } from './utils/LocalStorage'

const App = () => {

  const { activeUser, setActiveUser } = useContext(activeUserContext)
  const { employeeData, adminData } = useContext(AuthContext)
  // console.log(employeeData)

  useEffect(() => {
    if (activeUser) {
      localStorage.setItem('activeUser', JSON.stringify(activeUser))
    }
  }, [activeUser])

  const loginHandler = (email, password) => {

    const employee = employeeData.find(emp => emp.email === email && emp.password === password)
    const admin = adminData.find(adm => adm.email === email && adm.password === password)

    if (admin) {
      setActiveUser({ role: 'admin', admin })
      // console.log('Admin logged in', admin)
    } else if (employee) {
      const emp = employeeData.find(emp => emp.id === employee.id);
      setActiveUser({ role: 'employee', employee })
      // console.log('Employee logged in', employee)
    } else {
      alert('Invalid credentials')
    }

  }

  return (
    <div className='h-screen bg-black'>
      {!activeUser ? <Login user={loginHandler} /> : activeUser.role === 'employee' ? <EmployeeDashboard /> : activeUser.role === 'admin' ? <AdminDashboard /> : null}
    </div>
  )
}

export default App
