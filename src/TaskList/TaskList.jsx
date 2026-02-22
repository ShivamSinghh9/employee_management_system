import React from "react";
import AcceptedTask from "./AcceptedTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="w-full h-[55%] flex items-center gap-5 overflow-auto ">
      
       {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <AcceptedTask key={idx} data={elem} />
        }
        if(elem.newTask){
          return <NewTask key={idx} data={elem} />
        }
        if(elem.completed){
          return <CompletedTask key={idx} data={elem} />
        }
        if(elem.failed){
          return<FailedTask key={idx} data={elem} />
        }
       })}
        
    
    </div>
  );
};

export default TaskList;
