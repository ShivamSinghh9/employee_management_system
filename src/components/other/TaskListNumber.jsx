import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex w-full py-10 gap-5 justify-between'>
        <div className='bg-blue-400 rounded-2xl  w-[45%] px-9 py-6'>
            <h1 className='font-medium text-2xl'>{data.taskNumbers.newTask}</h1>
            <h2 className='font-semibold text-2xl'>New Task</h2>
        </div>
        <div className='bg-green-400 rounded-2xl w-[45%] px-9 py-6'>
            <h1 className='font-medium text-2xl'>{data.taskNumbers.completed}</h1>
            <h2 className='font-semibold text-2xl'>Completed Task</h2>
        </div>
        <div className='bg-yellow-400 rounded-2xl w-[45%] px-9 py-6'>
            <h1 className='font-medium text-2xl'>{data.taskNumbers.active}</h1>
            <h2 className='font-semibold text-2xl'>Accepted Task</h2>
        </div>
        <div className='bg-red-400 rounded-2xl w-[45%] px-9 py-6'>
            <h1 className='font-medium text-2xl'>{data.taskNumbers.failed}</h1>
            <h2 className='font-semibold text-2xl'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumber