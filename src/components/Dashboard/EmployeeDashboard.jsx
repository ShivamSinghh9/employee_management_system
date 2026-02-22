import React from 'react'
import Header from '../other/Header'
import TaskList from '../../TaskList/TaskList'
import TaskListNumber from '../other/TaskListNumber'

const EmployeeDashboard = ({data, setUser}) => {
  
  return (
    <div className='h-screen w-screen flex flex-col gap-5 bg-[#1c1c1c] px-15 py-9 text-white'>
       <Header setUser={setUser} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard