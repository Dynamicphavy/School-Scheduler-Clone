import React from 'react'

const SignForm = () => {
  return (
    <div>
      <div className="w-[37.5rem] h-[25rem] flex flex-col justify-center items-center gap-[1.25rem] text-[#fff] border-[#fff] border-[0.063rem] rounded-[1.25rem]">
        <h1>Sign Up</h1>

        <div>
          <i className="fa-solid fa-user absolute mt-[0.938rem] ml-[0.75rem]"></i>
          <input type="text" 
            placeholder="Username" 
            className="w-[25rem] h-[3.125rem] bg-[#000] border-[#fff] border-[0.063rem] rounded-[0.75rem] text-[#fff] pt-[0.938rem] pr-[1.25rem] pb-[1.25rem] pl-[2.188rem]" 
          />
        </div>

        <div>
          <i className="fa-solid fa-envelope absolute mt-[0.938rem] ml-[0.75rem]"></i>
          <input type="email" 
            placeholder="Email" 
            className="w-[25rem] h-[3.125rem] bg-[#000] border-[#fff] border-[0.063rem] rounded-[0.75rem] text-[#fff] pt-[0.938rem] pr-[1.25rem] pb-[1.25rem] pl-[2.188rem]" 
          />
        </div>

        <div>
          <i className="fa-solid fa-lock absolute mt-[0.938rem] ml-[0.75rem]"></i>
          <input type="password" 
            placeholder="Password" 
            className="w-[25rem] h-[3.125rem] bg-[#000] border-[#fff] border-[0.063rem] rounded-[0.75rem] text-[#fff] pt-[0.938rem] pr-[1.25rem] pb-[1.25rem] pl-[2.188rem]" 
          />
        </div>
        <button className="w-[7.5rem] h-[2.5rem] bg-[#000] text-[#fff] border-[#fff] border-[0.063rem] rounded-[1.25rem] cursor-pointer">Login</button>
        <p>Forgotten Password? <a href="/reset" className='hover:text-blue-500'>Click Here</a> to reset</p>
      </div> 
    </div>
  )
}

export default SignForm;