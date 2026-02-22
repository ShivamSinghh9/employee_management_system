import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div
      id="alltask"
      className="w-full font-sans rounded-2xl p-3 bg-[#1c1c1c]  "
    >
      <div className="flex items-center justify-between gap-8 mb-2 bg-red-400 p-5 rounded-[5px]">
        <h2 className="font-bold text-lg w-1/5">Employee Name</h2>
        <h3 className="font-semibold text-lg w-1/5">New Task</h3>
        <h4 className="font-semibold text-lg w-1/5">Active Task</h4>
        <h4 className="font-semibold text-lg w-1/5">Completed</h4>
        <h4 className="font-semibold text-lg w-1/5">Failed</h4>
      </div>
      <div className="">
        {userData.map(function (elem,idx) {
          return (
            <div key={idx}
              className="flex justify-between gap-8 mb-2 border-2 border-amber-100 p-3 rounded-[5px]"
            >
              <h2 className="font-bold text-lg  w-1/5">{elem.firstName}</h2>
              <h3 className="font-semibold text-lg text-blue-400 w-1/5">{elem.taskNumbers.newTask}</h3>
              <h4 className="font-semibold text-lg text-yellow-400 w-1/5">{elem.taskNumbers.active}</h4>
              <h4 className="font-semibold text-lg text-green-600 w-1/5">{elem.taskNumbers.completed}</h4>
              <h4 className="font-semibold text-lg text-red-600 w-1/5">{elem.taskNumbers.failed}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
