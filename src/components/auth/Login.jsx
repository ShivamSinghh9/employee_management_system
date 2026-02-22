import React, { useState } from "react";

const Login = ({handleLogin}) => {

  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault(e)
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className="h-screen w-screen bg-[#2a2a2a] flex items-center justify-center">
      <div className="flex flex-wrap border-green-300 border-2 text-white rounded-xl py-20 px-20">
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className="h-full w-full flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            type="email"
            placeholder="Enter email"
            className="border-2 w-full border-green-300 py-2 px-5 rounded-4xl font-medium text-white outline-none "
            required
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            type="password"
            placeholder="Enter password"
            className="border-2 m-3 w-full border-green-300 py-2 px-5 rounded-4xl font-medium text-white outline-none"
            required
          />
          <button 
          className="cursor-pointer border-none w-full bg-green-400 py-2 px-5 rounded-4xl font-medium text-white outline-none">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
