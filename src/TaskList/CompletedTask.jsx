import React from "react";

const CompletedTask = ({data}) => {
  return (
    <div className="flex shrink-0 h-full w-75  flex-col px-5 py-5 rounded-2xl bg-blue-400">
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
        <button className="w-full bg-green-600 py-2 rounded-[5px]">Completed</button>
      </div>
    </div>
  );
};

export default CompletedTask;
