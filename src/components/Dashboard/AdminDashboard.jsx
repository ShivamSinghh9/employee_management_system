import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({data, setUser}) => {
  return (
    <div className="h-screen w-screen flex flex-col gap-5 bg-[#2b2b2b] px-15 py-9 text-white">
      <Header setUser={setUser} />
      <CreateTask data={data} />
      <AllTask data={data} />
    </div>
  );
};

export default AdminDashboard;
