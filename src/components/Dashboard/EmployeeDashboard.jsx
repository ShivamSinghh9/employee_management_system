import React from 'react'
import Header from '../other/Header'
import TaskList from '../other/TaskList'
import TaskListNumber from '../other/TaskListNumber'

const EmployeeDashboard = () => {
  return (
    <div className='h-screen w-screen flex flex-col gap-5 bg-[#1c1c1c] px-15 py-9 text-white'>
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard