import React from "react";

const AcceptedTask = ({data}) => {
  console.log();
  
  return (
    <div className="flex shrink-0 h-full w-75  flex-col px-5 py-5 rounded-2xl bg-red-400">
      <div className="flex items-center justify-between">
        <h1 className="px-6 rounded-xs font-semibold py-1 bg-red-600">{data.category}</h1>
        <p className="font-semibold">{data.date}</p>
      </div>
      <div className="mt-10 w-full">
        <h1 className="font-bold text-2xl mb-3">{data.title}</h1>
        <p className="font-semibold text-l">
          {data.description}
        </p>
      </div>
      <div className="flex justify-between mt-5">
        <button className="bg-green-500 px-2 py-1 text-sm rounded-[5px]">Mark as completed</button>
        <button className="bg-red-500 px-2 py-1 text-sm rounded-[5px]">Mark as failed</button>
      </div>
    </div>
  );
};

export default AcceptedTask;
