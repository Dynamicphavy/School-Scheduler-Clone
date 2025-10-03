import React from 'react'
import { useNavigate } from 'react-router'

const LogCard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-[37.5rem] h-[25rem] flex flex-col justify-center items-center gap-[1.25rem] text-[#fff] border-[#fff] border-[0.063rem] rounded-[1.25rem]">
        <h2 className="font-medium">One of Us?</h2>
        <p>You can login with the button below</p>
        <button 
          className="w-[7.5rem] h-[2.5rem] bg-[#000] text-[#fff] border-[#fff] border-[0.063rem] rounded-[1.25rem] cursor-pointer"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default LogCard;