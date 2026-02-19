import React from 'react'
import Login from './components/auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

const App = () => {
  return (
    <div className='h-screen w-screen'> 
      {/* <Login /> */}
      {/* <AdminDashboard /> */}
      <EmployeeDashboard />
    </div>
  )
}

export default App