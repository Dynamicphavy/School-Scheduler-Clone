import React from 'react'
import ResetForm from './ResetForm'
import SignCard from '../login/SignCard'

const Reset = () => {
  return (
    <div className="bg-[#000]">
      <div className="w-full h-[34.375rem] flex flex-row justify-center items-center gap-[4.375rem]">
        <SignCard />
        <ResetForm />
      </div>
    </div>
  )
}

export default Reset;