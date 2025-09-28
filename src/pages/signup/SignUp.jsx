import React from 'react'
import LogCard from './LogCard'
import SignForm from './SignForm'

const SignUp = () => {
  return (
    <div>
      <div className="w-full h-[34.375rem] flex flex-row justify-center items-center gap-[4.375rem]">
        <LogCard />
        <SignForm />
      </div>
    </div>
  )
}

export default SignUp;