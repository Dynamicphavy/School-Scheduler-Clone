import React from 'react'
import SignCard from './SignCard'
import LogForm from './LogForm'

const Login = () => {
  return (
    <div className="bg-[#000]">
      <div className="w-full h-[34.375rem] flex flex-row justify-center items-center gap-[4.375rem]">
        <SignCard />
        <LogForm />
      </div>
    </div>
  )
}

export default Login;