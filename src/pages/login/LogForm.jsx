import React from 'react'

const LogForm = () => {
  return (
    <div>
      <div className="w-[37.5rem] h-[25rem] flex flex-col justify-center items-center gap-[1.25rem] text-[#fff] border-[#fff] border-[0.063rem] rounded-[1.25rem]">
        <h1>Sign In</h1>

        <div>
          <input type="text" 
            placeholder="Email" 
            className="w-[25rem] h-[3.125rem] bg-[#000] border-[#fff] border-[0.063rem] rounded-[0.75rem] text-[#fff] pt-[0.938rem] pr-[1.25rem] pb-[1.25rem] pl-[2.188rem]" 
          />
        </div>

        <div>
          <input type="password" 
            placeholder="Password" 
            className="w-[25rem] h-[3.125rem] bg-[#000] border-[#fff] border-[0.063rem] rounded-[0.75rem] text-[#fff] pt-[0.938rem] pr-[1.25rem] pb-[1.25rem] pl-[2.188rem]" 
          />
        </div>
        <button className="w-[7.5rem] h-[2.5rem] bg-[#000] text-[#fff] border-[#fff] border-[0.063rem] rounded-[1.25rem] cursor-pointer">Login</button>
        <p>Forgotten Password? Click Here to reset</p>
      </div>
    </div>
  )
}

export default LogForm;