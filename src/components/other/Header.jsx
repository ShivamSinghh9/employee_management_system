import React from "react";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <h2 className="text-2xl">Hello</h2>
        <h1 className="text-3xl">Shivam 👋</h1>
      </div>
      <div>
        <button className="bg-red-500 px-5 font-semibold text-xl cursor-pointer rounded-xs py-2">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
