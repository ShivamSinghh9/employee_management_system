import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newtask, setNewTask] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
   
    setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false})
    const data = userData
    


    data.forEach(function(elem){
      
      if(asignTo == elem.firstName){
        elem.tasks.push(newtask)
        elem.tasks.newTask = elem.tasks.newTask +1 
      }
    })
    setUserData(data)
    console.log(data);
    

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  
  }
  return (
    <div>
        
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="w-full flex justify-between mt-3 bg-[#1c1c1c] px-5 py-5 rounded-2xl">
          <div className="flex flex-col gap-5 w-[50%]">
            <div>
              <h3 >Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              type="text" 
              placeholder="Make a UI Design" 
              className="border-2 px-2 py-1 rounded-[5px] outline-none w-[60%]"
              />
            </div>
            <div>
              <h3>Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              type="date"
              className="border-2 px-2 py-1 rounded-[5px] w-[60%]"
              />
            </div>
            <div>
              <h3>Asign to</h3>
              <input 
              value={asignTo}
              onChange={(e)=>{
                setAsignTo(e.target.value)
              }}
              type="text" 
              placeholder="Employee name" 
              className="border-2 px-2 py-1 rounded-[5px] outline-none w-[60%]"
              />
            </div>
            <div>
              <h3>Category</h3>
              <input 
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              type="text" 
              placeholder="Design, date, etc" 
              className="border-2 px-2 py-1 rounded-[5px] outline-none w-[60%]"
              />
            </div>
          </div>
          <div className="flex gap-3 flex-col w-[30%]">
            <div>
              <h3>Description</h3>
              <textarea
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
              name="" 
              id=""
              className="w-full h-[200px] border-2 px-2 py-1 rounded-[5px] outline-none w-[60%]"
              ></textarea>
            </div>
            <div>
              <button 
              className="bg-green-400 rounded-[5px] w-full py-3 cursor-pointer font-bold text-lg">
              
                Create Task</button>
            </div>
          </div>
        </form>
      
    </div>
  )
}

export default CreateTask